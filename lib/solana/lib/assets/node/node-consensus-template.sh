#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail
# Remove empty snapshots
find "/data/data/ledger" -name "snapshot-*" -size 0 -print -exec rm {} \; || true
export RUST_LOG=error
export RUST_BACKTRACE=full
export SOLANA_METRICS_CONFIG=__SOLANA_METRICS_CONFIG__

#See https://github.com/aws-samples/aws-blockchain-node-runners/issues/31
ulimit -n 1000000

TOKEN=$(curl -s -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")
export EC2_INTERNAL_IP=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" -s http://169.254.169.254/latest/meta-data/local-ipv4)

/home/bcuser/bin/agave-validator \
--ledger /data/data/ledger \
--identity /home/bcuser/config/validator-keypair.json \
--vote-account /home/bcuser/config/vote-account-keypair.json \
__KNOWN_VALIDATORS__ \
--expected-genesis-hash __EXPECTED_GENESIS_HASH__ \
__ENTRY_POINTS__ \
--rpc-port 8899 \
--private-rpc \
--rpc-bind-address $EC2_INTERNAL_IP \
--wal-recovery-mode skip_any_corrupted_record \
--init-complete-file /data/data/init-completed \
--limit-ledger-size \
--accounts /data/accounts \
--incremental-snapshot-interval-slots 0 \
--log -
