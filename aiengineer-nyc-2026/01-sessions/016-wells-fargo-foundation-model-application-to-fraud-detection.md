---
session_id: "016"
title: "Wells Fargo Foundation Model: Application to Fraud Detection at Scale"
agenda_title: "Wells Fargo Foundation Model: Application to Fraud Detection at Scale"
speakers: ["Freddy Lecue"]
start_wall: "10:39:17 AM ET"
end_wall: "11:00:43 AM ET"
video_start: "01:51:25"
video_end: "02:12:51"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=6685s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "talk"
tags: ["foundation-model", "fraud-detection", "tabular-data", "tokenization", "pre-training", "financial-services", "transformers"]
confidence: "high"
---

# Wells Fargo Foundation Model: Application to Fraud Detection at Scale

> Wells Fargo pre-trained its own 1-billion-parameter transaction foundation model from scratch on billions of monthly customer transactions, and it beat the production XGBoost fraud model on detection rate, false positives, and latency.

## TL;DR
- Wells Fargo built its first in-house foundation model: a decoder-only transformer pre-trained from scratch on billions of monthly customer transactions across debit, credit, digital, and check channels.
- The team replaced thousands of hard-crafted fraud features with about 100 raw features across five dimensions (who, what, channel, when, where), and let the transformer learn the relationships.
- Tokenization was the hardest part: zip codes regrouped into about 2,800 buckets by distribution, plus amounts, delta-time between transactions, IP addresses, and postal codes.
- The 1B-parameter model beat the production XGBoost model on detection rate and false positives at the same time - "millions of dollar savings" - and ran inside the 250 ms card-decline window. An 11B version is in progress.
- One backbone now serves many organizations: fraud detection in use, with credit line increase, anti-money laundering, and marketing under investigation.

## Key lessons
1. A foundation model does not need language at its core. Wells Fargo made the customer transaction the base unit and pre-trained a decoder-only transformer to predict the next transaction, mirroring next-token prediction in language models, then fine-tuned for downstream tasks.
2. Pre-train from scratch when the vocabulary is yours. The team reused a public architecture but trained all weights from scratch on Wells Fargo GPU clusters over days to weeks, because the financial-services transaction vocabulary is too specific for open-weight models.
3. Cut feature engineering down to raw units. Production models relied on thousands of hard-crafted features; the team stepped back to about 100 raw "information unit" features across five dimensions (customer and merchant, what was transacted, channel, time, location) and let the architecture find the relationships.
4. Tokenization is the real work in tabular pre-training. Fields encode differently: some categories have 8 types, zip codes regroup into about 2,800 buckets based on distributions, plus transaction amounts, delta-time between transactions, IP addresses, and postal codes - and the vocabulary must stay small enough to train. Lecue called tokenization plus post-training "the recipe or the secret sauce."
5. Scale numbers: billions of transactions per month, millions of accounts, and hundreds of transactions per client per month. The first model is 1B parameters, chosen as the smallest size that gave the highest boost; an 11B version is next.
6. Chinchilla-style token math needed correction. An initial plan of 20 times the parameter count in training tokens proved too low; a few experiments showed roughly ten times more tokens per parameter were needed.
7. Standard training recipes were enough: mixed precision, distributed data parallel, maximized micro-batch size, Muon, RoPE, flash attention, and activation checkpointing, with causal and masked language-modeling objectives and perplexity plus downstream-accuracy dashboards for evaluation - "advices from the best."
8. Attention over history is the edge on XGBoost, and wins must map to dollars. The missing piece in XGBoost was the relationship between the transaction being classified and all past transactions; transformer attention captures it and pushed detection rate higher. Inference fits the sub-250 ms decline window, and the combined win - more fraud flagged and fewer false positives - is worth "millions of dollar savings," since a wrongly declined transaction adds call-center cost and lost transaction value.

## Notable quotes
- [02:00:24 | 10:48:16 AM] We pre-train transformer blocks at scale from scratch using our transaction data.
- [02:07:47 | 10:55:39 AM] So I would say the recipe or the secret sauce is really how you do the tokenization and how you're going to do the post-training.
- [02:11:12 | 10:59:03 AM] And in this case, we managed to get, we flagged more fraudulent activities, and we even reduced the false positive.
- [02:11:52 | 10:59:43 AM] It's millions of dollar savings.

## Session narrative
The recording opens mid-talk: Freddy Lecue is already on stage, announcing "the work we've been doing lastly on building our first foundation model, a Wells Fargo foundation model" (the spoken introduction likely fell just before the segment boundary, during the preceding room-transition break). His framing was direct: foundation models do not need to be language-based. Financial services hold huge structured, tabular data - customer transactions from debit, credit, digital, and check channels across consumer and investment banking - and you cannot just pour that into a language model and get the best of it. The intent was to move from many siloed models across organizations to one backbone that learns representations of customer transactions at scale and that every organization can reuse for downstream tasks such as credit scoring, fraud detection, anti-money laundering, and marketing. He gave the spoiler up front: this model beat XGBoost, the incumbent production model, even from a latency perspective, with much better false-positive reduction and a better detection rate.

The core of the talk mapped language-model stages onto transactions. On the language side, tokens feed next-token prediction, then supervised fine-tuning, then RLHF-style post-training. For the transaction foundation model, the base is transactions: the model still predicts the next thing, but the next thing is the next transaction or the next token in a transaction, using all channels. Everything was pre-trained from scratch - he stressed this twice because "people sometimes are confused" - on Wells Fargo's own GPU cluster, borrowing an existing architecture (the transcript's "the zero rate that we use from OpenAI" is a garble of the architecture reference) but none of the weights. Data scale ran to billions of transactions per month, millions of accounts, and hundreds of transactions per client per month, described across five dimensions: who (customer and merchant), what, how (channel), when, and where. Instead of the thousands of hard-crafted features behind the existing production models, the team settled on about 100 raw features and let the transformer blocks figure out the relationships. The vocabulary, he argued, is unique to financial services, which is why no existing pre-trained model was used.

The hardest engineering was tokenization of tabular data: deciding what encodes into a token and what the vocabulary should be, because a too-huge vocabulary makes training messy. Examples ranged from categories with only eight types to transaction amounts, delta-time between transactions, IP addresses, and postal codes; zip codes were regrouped into roughly 2,800 buckets based on distributions rather than encoded one-by-one. The team started from the mathematics behind open tabular foundation models (the transcript's "Tinkchilla" appears to be "the Chinchilla") and adapted it - embedding dimensions, decoder block counts, and the rest of the architecture recipe. They were not chasing a trillion parameters: 1B was the smallest size that gave the highest boost, an 11B version is in progress, and the sizing rule of thumb (20 times the parameters in tokens) turned out to be about 10 times too low in experiments. Training itself was deliberately boring - mixed precision, distributed data parallel, maximized micro-batch size, Muon, RoPE, flash attention, activation checkpointing - "advices from the best," with perplexity and downstream accuracy dashboards for evaluation.

The payoff was the downstream task: fraud classification. Given a sequence of transactions - "I have someone just using the debit card. Is that transaction fraudulent with respect to all historical information?" - the model classifies the new transaction against the customer's history. The missing piece in the XGBoost production model was exactly the relationship between the transaction being classified and all past transactions, which is hard to encode by hand; transformer attention over past transactions is what pushed the detection rate higher. Serving needed good engineering to stay under 250 milliseconds, because the decline decision must happen within that window, and latency was comfortably within budget. The final result: more fraudulent activity flagged and false positives reduced at the same time, compared with the state-of-the-art XGBoost fraud model - "millions of dollar savings," since a declined legitimate transaction triggers calls, operational cost, and lost transaction value. He closed with the recap: built on billions of Wells Fargo transactions, pre-trained from scratch with no open weights, a couple of days to weeks of pre-training, then fine-tuned per task. Fraud detection is in use, credit line increase, anti-money laundering, and marketing are under investigation, and the same foundation now serves different organizations within Wells Fargo: "thank you for having me, and thank you."

## Speaker details
**Freddy Lecue** - Head of Frontier AI Models, Managing Director, Wells Fargo. He is a Managing Director and Head of Frontier AI Model Methodology at Wells Fargo, where he architects and scales generative AI, agentic AI, and advanced machine learning models for the enterprise while balancing performance, latency, cost, and risk. He leads the firm's AI research agenda, raises modeling standards through targeted training and best-practice frameworks, and drives AI-enabled change across the end-to-end model lifecycle. Before Wells Fargo he held senior AI leadership roles at JPMorgan Chase, Thales Canada, Accenture Ireland, and IBM Ireland; he holds a Ph.D. in Computer Science and is based in New York City.

Links: [LinkedIn](https://www.linkedin.com/in/freddylecue) | [Website](https://www.wellsfargo.com/)

## Full timestamped transcript
```
[01:51:25 | 10:39:17 AM] And I'm going to show you the work we've been doing lastly on building our first foundation model, a Wells Fargo foundation model.
[01:51:25 | 10:39:17 AM] So I explain why we did that, how we did it, and what we accomplished in doing so.
[01:51:25 | 10:39:17 AM] So, first, foundation model, it doesn't necessarily need to be language-based.
[01:51:25 | 10:39:17 AM] I mean, we're all playing with Claude and ChatGPT and others.
[01:51:25 | 10:39:17 AM] They're all language-based foundation models.
[01:51:25 | 10:39:17 AM] In financial services, we also have language, of course, from unstructured representation data.
[01:51:25 | 10:39:17 AM] But we also have a lot of structured representation, a lot of these data is tabular data.
[01:51:25 | 10:39:17 AM] We have a lot of information from our customers.
[01:51:25 | 10:39:17 AM] We have information in investment banking, consumer banking, and all of these data is data that we have in Wells Fargo and all big financial organizations have too.
[01:51:25 | 10:39:17 AM] And we want to take benefit of all of this huge amount of data that we have.
[01:51:25 | 10:39:17 AM] And it's not like you just take it and put it in a language model and get the best of it.
[01:51:25 | 10:39:17 AM] Of course, you can get a lot of benefit out of it, but it's not necessarily the best way to do it.
[01:51:25 | 10:39:17 AM] So what we decided to do is to look at the data we have, all the transactions, all the customer transactions that are doing with their debit card, credit card, digital, check, all of those coming from many different channels, and see if we can.
[01:51:25 | 10:39:17 AM] Builds from the show model that we can use and fine-tune for downstream tasks like credit scoring, or that you can use it for fraud detection, anti-money laundering, do marketing.
[01:51:25 | 10:39:17 AM] So how we can build one backbone that you can use and streamline across downstream tasks.
[01:51:25 | 10:39:17 AM] So now you're moving from many models very siloed across different organizations into really one backbone that every organization can just reuse because you learn the representations of customers' transactions at scale.
[01:51:25 | 10:39:17 AM] So that's the intent.
[01:51:25 | 10:39:17 AM] And just spoiler alert, you may say, Hey, that's tabular data.
[01:51:25 | 10:39:17 AM] Why do you just don't use XGBoost and the usual suspect?
[01:51:25 | 10:39:17 AM] We did that.
[01:51:25 | 10:39:17 AM] This is the model we had in production.
[01:51:34 | 10:39:25 AM] But the model I'm going to show you is something that beat XGBoost, even from a latency perspective, but also from a fraud detection.
[01:52:06 | 10:39:58 AM] We get much better false reduction of false positive and better detection rate.
[01:52:44 | 10:40:36 AM] So it was a really good lesson learned in terms of having better model using foundation model.
[01:53:30 | 10:41:21 AM] And foundation model mean transformer blocks, and that's what we built.
[01:53:41 | 10:41:33 AM] So we have, as I mentioned, billions of transactions on a monthly basis.
[01:53:46 | 10:41:38 AM] Our customers interacting with their debit, credit card, and they do check, and they do different sort of transactions.
[01:54:05 | 10:41:56 AM] And the question is really how we can use this information at scale and not for one and every single downstream task.
[01:55:36 | 10:43:28 AM] So I'm going to cover a bit of the data, the representations, the architecture that we use, what the result we get, and the lesson we learned in building this.
[01:56:49 | 10:44:41 AM] All right, so.
[01:56:50 | 10:44:41 AM] I mean, left-hand side, language foundation model, the processing language tokens, and then the goal is to learn a representation that's going to predict the next token.
[01:57:23 | 10:45:14 AM] And then you have supervised fine-tuning, and then you do RLHF, LRVR, and all of the great post-training process to get better at the task that you want to, right?
[01:58:53 | 10:46:44 AM] And that's for languages.
[01:59:02 | 10:46:54 AM] That's great.
[01:59:07 | 10:46:59 AM] But what if your data is very much more specialized in terms of representation?
[01:59:50 | 10:47:42 AM] So that's where we build this transaction foundation model.
[01:59:51 | 10:47:43 AM] So instead of having languages as the base, the base is now transactions, transaction from our customers.
[01:59:53 | 10:47:44 AM] And you still try to predict the next thing, and here the next thing is the next transaction or it's the next token in the transaction using all of the channel that you have.
[01:59:53 | 10:47:44 AM] But that's not the end goal.
[01:59:53 | 10:47:44 AM] I mean, similarly to language model where you try to predict the next token, that's not the end of the story, right?
[01:59:53 | 10:47:44 AM] You learn a representation, and then you use that representation, and then you fine-tune it and you post-train it for any other task, right?
[01:59:53 | 10:47:44 AM] So it could be classification task for languages, but in our context for transaction foundation model.
[01:59:59 | 10:47:51 AM] This model could be used for credit line increase, could be used for doing fraud detections and flagging bad actors from an anti-money laundering perspective.
[02:00:06 | 10:47:57 AM] And the goal is to learn this relationship between transactions over time and transactions across customers.
[02:00:16 | 10:48:07 AM] That's really the intent.
[02:00:17 | 10:48:09 AM] So the intent number one is you do pre-train from scratch.
[02:00:21 | 10:48:13 AM] I'm saying it again because people sometimes are confused.
[02:00:24 | 10:48:16 AM] We pre-train transformer blocks at scale from scratch using our transaction data.
[02:00:32 | 10:48:24 AM] So the zero rate that we use from OpenAI, we just use the architecture, and then we pre-train from scratch using our GPU cluster.
[02:00:40 | 10:48:32 AM] And then we train for a couple of days and weeks, and then you do the downstream task of post-training.
[02:00:49 | 10:48:40 AM] But the goal here, and you pre-train it for predicting the next token or the next transactions, and you try to do this, you try to predict the next pattern of the customer.
[02:01:00 | 10:48:52 AM] But that's not the intent.
[02:01:02 | 10:48:53 AM] The intent is to do the downstream task later on.
[02:01:04 | 10:48:56 AM] And in terms of scale, I mean, we operate at a large scale, so we have billions of transactions, a million of accounts, hundreds of transactions per client on a monthly basis, interacting with their debit card, credit card, or doing check.
[02:01:21 | 10:49:13 AM] And the five main dimensions we look at is really who is doing, I mean, who is processing and who is asking, and who is providing a service.
[02:01:32 | 10:49:24 AM] So really the customer and the merchant.
[02:01:35 | 10:49:26 AM] The what, so, I mean, what do we buy, what do we transact, and how.
[02:01:41 | 10:49:32 AM] So which channel is it?
[02:01:43 | 10:49:34 AM] Credit, is it debit, is it digital?
[02:01:45 | 10:49:36 AM] When is it happening and where is it happening?
[02:01:47 | 10:49:39 AM] And all of those, they're basically breaking down in hundreds of features.
[02:01:51 | 10:49:43 AM] And if you look at the existing model we have in production, there's a lot of—and people that build those models in similar organizations may understand that—they build a lot of very hard-crafted, uncrafted engineering, feature engineering efforts on that, and that requires a lot and a lot of time.
[02:02:11 | 10:50:03 AM] So we step back and look at really the raw features we need, not the ones that have been really pre-built and post-built for doing the downstream task, but try to understand which raw features.
[02:02:23 | 10:50:15 AM] And we ended up with basically a hundred features.
[02:02:26 | 10:50:18 AM] Even if at the end of the day we had thousands of them, but we tried to find which ones are really the raw information unit.
[02:02:34 | 10:50:25 AM] And then we let the architecture, the transformer blocks, to figure out the relationship between those core features.
[02:02:41 | 10:50:32 AM] And as you can see, we do have a bunch of features on those five dimensions, and the vocabulary is very unique.
[02:02:51 | 10:50:43 AM] to the financial services setup.
[02:02:53 | 10:50:45 AM] So, and that's the reason why, I mean, we didn't really use existing pre-trained model, because the vocabulary that we use is very, very specific to the work that you want to do.
[02:03:06 | 10:50:58 AM] And even if you merge, well, all digital and checking and saving and all of those sort of transactions, even if you merge all of those, you still end up with a very limited number of features and characteristics.
[02:03:22 | 10:51:13 AM] So at that scale, then the question is, well, how you work with that?
[02:03:27 | 10:51:19 AM] So we started, everything is tabular data.
[02:03:29 | 10:51:21 AM] I mean, there's no secret, it's tabular data.
[02:03:31 | 10:51:23 AM] And then the goal is to understand how you're going to capture the vocabulary, because you do have numerical values, you have categorical values, you have information like zip code.
[02:03:43 | 10:51:34 AM] Do you encode each and every zip code in a token?
[02:03:46 | 10:51:38 AM] Does that make sense?
[02:03:47 | 10:51:39 AM] So there's a lot of efforts you need to push in understanding the vocabulary that you need and the vocabulary that you want also to scale, because at the training, if you have a too huge vocabulary, it would be kind of messy to train such a model with a vocabulary which is far, far too big.
[02:04:04 | 10:51:56 AM] So there's a lot of effort in understanding this value to token.
[02:04:08 | 10:52:00 AM] So which information do you encode in a token?
[02:04:11 | 10:52:03 AM] And then you have the token to ID, the tokenizations, and then the embedding lookup.
[02:04:15 | 10:52:07 AM] So then when we have a transaction coming up, you do have the vocabulary.
[02:04:19 | 10:52:11 AM] So it's basically, it's a lookup and aligning a transaction and all the characteristics of that transaction to a token and an ID and then an embedding.
[02:04:29 | 10:52:21 AM] So just to give you a number, well, some numbers.
[02:04:35 | 10:52:27 AM] So we have quantitative, qualitative, categorical of different kinds, right?
[02:04:39 | 10:52:31 AM] So categories with only eight types, some with much bigger types.
[02:04:44 | 10:52:35 AM] You have transaction amount, which is a big deal.
[02:04:47 | 10:52:38 AM] You have the delta time between transactions.
[02:04:49 | 10:52:41 AM] So you have anything related to IP address, postal code.
[02:04:52 | 10:52:43 AM] So just to give you an example of variety and heterogeneity of each and every characteristic could be encoded in a binary token or could be encoded in a much larger number of tokens.
[02:05:05 | 10:52:56 AM] And even if you look at the zip code, I mean, you have a much larger number of zip codes in the U.
[02:05:12 | 10:53:03 AM] S.
[02:05:12 | 10:53:04 AM] than those 2,800, but you have a much better way to structure how you're going to regroup zip code based on distributions, for instance.
[02:05:24 | 10:53:16 AM] So here, just what we— so we use the Tinkchilla mathematics behind to define how we build it, right?
[02:05:36 | 10:53:28 AM] I mean, initially, because we had no clue how it's going to work in a tabular space, even though there are existing open weights and open solutions for doing tabular data foundation models.
[02:05:50 | 10:53:41 AM] So we started from what they learned and adapted to what we needed to do.
[02:05:55 | 10:53:46 AM] And that gives you an example of embedding dimensions, number of decoder blocks we use, and all of the recipe from an architecture perspective.
[02:06:05 | 10:53:57 AM] So we have— and as you can see, we're not trying to build a trillion-parameters model.
[02:06:11 | 10:54:02 AM] We don't try to compete with any of the leaders in the language models because we're working really and focusing on transactions, right?
[02:06:21 | 10:54:12 AM] Transactions foundation models at billion level.
[02:06:24 | 10:54:15 AM] And one one billion is because that the model that was kind of the smallest and gave us the highest boost.
[02:06:32 | 10:54:23 AM] And now we're working on the next version, that 11 billion.
[02:06:35 | 10:54:27 AM] But that's good enough to give a lot of ROI from a false positive reductions for downstream tasks like fraud detection and unit detection rate.
[02:06:48 | 10:54:40 AM] So, and the type of architecture, so the decoder-only architecture, that's basically for predicting the next token or the next transaction, and that's really the pre-training.
[02:07:01 | 10:54:52 AM] So here we initially used 20 times the number of parameters to define the number of tokens we might need.
[02:07:06 | 10:54:57 AM] We ended up actually 10 times factored than that.
[02:07:09 | 10:55:01 AM] So by doing a few experimentations, we needed much more tokens per parameters.
[02:07:15 | 10:55:06 AM] I mean, this is kind of the initial experimentation we did.
[02:07:20 | 10:55:12 AM] So I'll pass on this because this is the usual suspect from an objective functions, causal language modeling and masked language modeling type of optimization work.
[02:07:34 | 10:55:25 AM] And from an architecture perspective, nothing really fancy here.
[02:07:39 | 10:55:31 AM] Again, the most complex part was really the tokenization, and then adapting and doing the pre-training, and then how you do the fine-tuning.
[02:07:47 | 10:55:39 AM] So I would say the recipe or the secret sauce is really how you do the tokenization and how you're going to do the post-training.
[02:07:56 | 10:55:47 AM] But anything from a training perspective, the question is just how many transactions you're going to put in your context or in your history for doing the training.
[02:08:08 | 10:55:59 AM] And evaluation, perplexity-based, accuracy dashboard on downstream tasks, that's the usual suspect.
[02:08:18 | 10:56:09 AM] Yeah, so use mixed precision, distributed data parallel, maximize micro-batch size, get faster convergence, yeah, using Muon, rope usual, and memory efficiency, flash attention, activation checkpointing.
[02:08:34 | 10:56:26 AM] I mean, here there is nothing really new.
[02:08:37 | 10:56:28 AM] It's just we use the advices from the best, from the ones that build even much bigger models.
[02:08:46 | 10:56:37 AM] So I'll pass on this one.
[02:08:48 | 10:56:40 AM] Time is short, but I wanted to spend some time on the results.
[02:08:54 | 10:56:46 AM] So, yeah, so when you build this foundation, that foundation is really, is only a backbone.
[02:09:04 | 10:56:56 AM] It's something you can use for downstream tasks.
[02:09:07 | 10:56:59 AM] And the downstream task was to do fraud classification.
[02:09:11 | 10:57:03 AM] So you have a transaction, and then you try to predict if that transaction is going to be fraudulent.
[02:09:16 | 10:57:08 AM] So in the model we have in production, it's a NextGBoost model, and it's trained on a large amount of transactions, which is fraudulent or non-fraudulent.
[02:09:26 | 10:57:18 AM] And the missing piece is that was the relationship between whatever transaction you try to predict, try to classify, and the relationship with this transaction with all of the past transactions.
[02:09:38 | 10:57:30 AM] And that information is kind of gone when you use a NextGBoost model, unless you encode it in a very hard way, which is not so easy.
[02:09:47 | 10:57:39 AM] But if you use transformer architectures, you do have these nice attentions from transactions to past transactions.
[02:09:55 | 10:57:47 AM] And that's basically what help, this is what we think, this is what really help pushing the...
[02:10:01 | 10:57:53 AM] Pushing the fraud detection rate much higher.
[02:10:03 | 10:57:55 AM] But at the end of the day, the downstream task was to say, here's the sequence of transactions.
[02:10:09 | 10:58:00 AM] I have someone just using the debit card.
[02:10:11 | 10:58:03 AM] Is that transaction fraudulent with respect to all historical information?
[02:10:18 | 10:58:09 AM] And that's exactly what you put in at inference time when you try to do the prediction.
[02:10:25 | 10:58:17 AM] So that's the architecture.
[02:10:27 | 10:58:19 AM] So nothing really fancy here.
[02:10:29 | 10:58:21 AM] You just need to have the good engineering in place to do less than 250 milliseconds for doing the processing, because the decline need to happen within that time frame.
[02:10:43 | 10:58:34 AM] But we were 10 times slower than that from a latency perspective, so it was all good.
[02:10:50 | 10:58:42 AM] And just in terms of final result we get.
[02:10:53 | 10:58:44 AM] So the main matrix, and those matrix relate right away to dollar, to cost, well, to savings for the firm.
[02:11:03 | 10:58:54 AM] So it's detection rate and false positive rate.
[02:11:06 | 10:58:57 AM] Of course, you can detect much higher, but in many cases, sometimes you get much more false positive.
[02:11:12 | 10:59:03 AM] And in this case, we managed to get, we flagged more fraudulent activities, and we even reduced the false positive.
[02:11:20 | 10:59:11 AM] So that was a big win.
[02:11:21 | 10:59:12 AM] That was a big win because at the end of the day, if you decline a transaction which is not fraudulent, then that person is going to call.
[02:11:29 | 10:59:20 AM] There is then operation cost associated to it.
[02:11:31 | 10:59:23 AM] You lose the transaction related to that non-fraudulent action.
[02:11:36 | 10:59:27 AM] So it's something that you don't really want to happen.
[02:11:42 | 10:59:33 AM] So again, that's compared to the state of the art of XGBoost model using fraud detection.
[02:11:49 | 10:59:40 AM] So it's basically huge.
[02:11:52 | 10:59:43 AM] It's millions of dollar savings.
[02:11:55 | 10:59:46 AM] So it's a very big boost.
[02:11:57 | 10:59:49 AM] So just to finish up on that slide.
[02:12:02 | 10:59:53 AM] So that foundation model has been built on billions of transactions from Wells Fargo customers.
[02:12:12 | 11:00:03 AM] That's number one.
[02:12:14 | 11:00:06 AM] It's pre-trained from scratch, so we don't pre-train from any open-weight existing model.
[02:12:19 | 11:00:10 AM] We use existing architecture, but the way they zero-rate, we pre-training on a couple of days.
[02:12:25 | 11:00:17 AM] I mean, we did a couple of weeks initially, but then that's pre-trained.
[02:12:28 | 11:00:20 AM] And then when it's pre-trained, it's pretty good in predicting the next transaction.
[02:12:33 | 11:00:25 AM] Then when you're done with that, then you can use it for many downstream tasks.
[02:12:37 | 11:00:28 AM] We use it for fraud detection.
[02:12:38 | 11:00:30 AM] Now we're investigating for credit line increase, investigating for anti-money laundering, investigating for marketing.
[02:12:45 | 11:00:36 AM] So now the same foundation is used across different organizations within Wells Fargo.
[02:12:51 | 11:00:43 AM] And yeah, thank you for having me, and thank you.
```
