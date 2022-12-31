# React Bitcoin Wallet

#### Video Demo: https://youtu.be/RI-cLd2RlSA

#### Description:

Bitcoin lightning wallet in React

#### Tools:

1. React Javascript framework
2. LNbits lightning API backend

#### Features:

1. Personal Bitcoin wallet
2. Transactions history
3. Send lightning payments with invoice
4. Receive lightning payments with invoice
5. Bitcoin monthly price chart

### Future improvements:

1. UX

### About Lightning payments:

Initially, Bitcoin was not designed to be scalable. It was intended to be a decentralized payment system where the users could remain anonymous and access it from anywhere. However, its popularity was one of its downfalls—transactions became much slower and more costly than intended. Thus, developers created cryptocurrency layers, where the first layer was the primary blockchain. Each layer beneath that was a secondary layer, tertiary layer, and so forth.

Each layer complements the layer above it and adds functionality. The Lightning Network is a second layer for Bitcoin that uses micropayment channels to scale the blockchain’s capability to conduct transactions more efficiently.

This layer consists of multiple payment channels between parties or Bitcoin users. A Lightning Network channel is a transaction mechanism between two parties. Using channels, the parties can make or receive payments from each other. Transactions conducted on the Lightning Network are faster, less costly, and more readily confirmed than those conducted directly on the Bitcoin blockchain.

The Lightning Network can also be used to conduct other types of off-chain transactions involving exchanges between cryptocurrencies.

### About LNBits:

LNbits is a very simple Python server that sits on top of any funding source, and can be used as:

Accounts system to mitigate the risk of exposing applications to your full balance, via unique API keys for each wallet
Extendable platform for exploring lightning-network functionality via LNbits extension framework
Part of a development stack via LNbits API
Fallback wallet for the LNURL scheme
Instant wallet for LN demonstrations
LNbits can run on top of any lightning-network funding source, currently there is support for LND, c-lightning, Spark, LNpay, OpenNode, lntxbot, with more being added regularly.
