import { News } from './models/news.model';

export const HotNews: News[] = [
  {
    id: 1,
    title: 'MIT Engineers Create New Groundbreaking Microchips',
    combinedTitle: 'mit-engineers-create-new-groundbreaking-microchips',
    subTitle:
      'According to MIT News, engineers at the Massachusetts Institute of Technology developed a groundbreaking technique for ultra-thin microchip transistors.',
    coverImage: 'assets/microchips.jpg',
    description: `<p><img src="data:image/jpeg;base64,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"></p><h4>The base iPhone 15 will share similarities with the iPhone 14 Pro (above)&nbsp;(Image credit: Future / Apple)</h4><p><br></p><h3>If you’re already rocking one of the&nbsp;<a href="https://www.techradar.com/news/best-iphone" rel="noopener noreferrer" target="_blank" style="color: rgb(47, 110, 145);">best iPhones</a>, we recently advised you to&nbsp;<a href="https://www.techradar.com/news/this-new-iphone-16-pro-rumor-has-killed-our-excitement-for-the-iphone-15-pro" rel="noopener noreferrer" target="_blank" style="color: rgb(47, 110, 145);">think twice about splashing the cash on the iPhone 15 Pro and instead wait for the iPhone 16 Pro</a>&nbsp;– and now we’ve got some advice for prospective&nbsp;<a href="https://www.techradar.com/reviews/iphone-14-pro-review" rel="noopener noreferrer" target="_blank" style="color: rgb(47, 110, 145);">iPhone 14 Pro</a>&nbsp;buyers.&nbsp;</h3><p><br></p><h3>Apple’s latest flagship is indisputably one of the&nbsp;<a href="https://www.techradar.com/news/best-phone" rel="noopener noreferrer" target="_blank" style="color: rgb(47, 110, 145);">best phones</a>&nbsp;money can buy in 2023, but at a base price of $999 / £1,099 / AU$1,749, it doesn’t come cheap. The standard&nbsp;<a href="https://www.techradar.com/reviews/iphone-14-review" rel="noopener noreferrer" target="_blank" style="color: rgb(47, 110, 145);">iPhone 14</a>&nbsp;starts at a much more reasonable $799 / £849 / AU$1,339 – and we suspect that you’ll soon be able to get your hands on the iPhone 14 Pro’s premium features for a similar price.&nbsp;</h3><h3>Enter the&nbsp;<a href="https://www.techradar.com/news/iphone-15" rel="noopener noreferrer" target="_blank" style="color: rgb(47, 110, 145);">iPhone 15</a>. Apple is expected to unveil its latest vanilla flagship, alongside the&nbsp;<a href="https://www.techradar.com/news/iphone-15-pro-latest-news-rumors-and-everything-we-know-so-far" rel="noopener noreferrer" target="_blank" style="color: rgb(47, 110, 145);">iPhone 15 Pro</a>&nbsp;and&nbsp;<a href="https://www.techradar.com/news/iphone-15-ultra" rel="noopener noreferrer" target="_blank" style="color: rgb(47, 110, 145);">iPhone 15 Ultra</a>, in September this year, and rumors indicate that the upcoming device will be an iPhone 14 Pro in all but name.&nbsp;</h3><p><br></p><h3>Essentially, the iPhone 15 is hotly tipped to get three of the iPhone 14 Pro’s defining features: the&nbsp;<a href="https://www.techradar.com/features/what-is-the-dynamic-island-on-the-iphone-14-pro-and-what-can-it-do" rel="noopener noreferrer" target="_blank" style="color: rgb(47, 110, 145);">Dynamic Island</a>, the super-fast A16 Bionic processor, and a 48MP main camera. Couple these with a rumored redesign of the phone’s chassis –&nbsp;<a href="https://www.techradar.com/news/the-iphone-15-might-get-a-premium-makeover" rel="noopener noreferrer" target="_blank" style="color: rgb(47, 110, 145);">all four iPhone 15 models are expected to get iPhone 11-style curved edges</a>&nbsp;and slimmer bezels – and the base iPhone 15 sounds like it’ll offer Pro-level features in a swanky new design package.</h3><h3><br></h3><h3>Unofficial renders showing the front and back of the iPhone 15&nbsp;(Image credit: 9to5Mac)</h3><p><br></p><h3>Not every iPhone 14 Pro feature will come to the vanilla iPhone 15, mind. The device is expected to retain the static 60Hz refresh rate of the iPhone 14, with Apple’s ProMotion technology – which allows for a 1-120Hz variable refresh rate on the iPhone 14 Pro and&nbsp;<a href="https://www.techradar.com/reviews/iphone-14-pro-max-review" rel="noopener noreferrer" target="_blank" style="color: rgb(47, 110, 145);">iPhone 14 Pro Max</a>&nbsp;– reserved for the iPhone 15 Pro and iPhone 15 Ultra.&nbsp;</h3><h3>The phone likely won’t inherit the iPhone 14 Pro’s advanced camera features, either, despite the presence of a 48MP main lens on the base-model iPhone 15.&nbsp;</h3><h3>That said, with Apple set to replace the Lightning port with USB-C ports on the entire iPhone 15 line, the base iPhone 15 will actually be a more versatile handset than the iPhone 14 Pro (if you’re someone who regularly finds yourself without a Lightning cable to hand).&nbsp;</h3><p><br></p><h3>As mentioned, we expect the iPhone 15 to match the iPhone 14 in terms of price, so a starting figure of $799 / £849 / AU$1,339 for the 128GB model seems likely. However, other manufacturers – including Samsung and Oppo – have opted to forgo 128GB storage options with their respective 2023 flagships, so the iPhone 15&nbsp;<em>could&nbsp;</em>start at $899 / £959 / AU$1,579 (for the 256GB model), but this would still be $200 / £250 / AU$320 less than the equivalent iPhone 14 Pro.&nbsp;</h3><p><br></p><p><img src="data:image/jpeg;base64,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"></p><p>The iPhone 14 Pro starts at $999 / £1,099 / AU$1,749&nbsp;(Image credit: Apple)</p><h3><br></h3><h3>Suffice to say, the repackaging of old features into new product offerings has proven an extremely lucrative business strategy for Apple throughout the years – though it’s worth remembering that we as consumers have benefited, too.&nbsp;</h3><h3>If you’re someone who watches Apple’s annual iPhone launches with excitement, only to be disappointed by the unattainable pricing of the company’s latest and greatest handsets, you can usually bet that – in 12 months’ time – you’ll be able to get your hands on what were previously Pro features in a vanilla-branded successor.&nbsp;</h3><h3>Sure, our wallets – not to mention the environment – would probably be better off if Apple released iPhones every two or three years, with each new model bringing genuine innovation to the table, but unfortunately, that’s not the way capitalism works.</h3><h3>We’ll be staying abreast of all the latest iPhone 15 news, rumors and leaks as we approach the line’s presumed September announcement, so stay tuned to TechRadar for the details.</h3>`,
  },
  {
    id: 2,
    title: 'Revolutionary Uses Of Blockchain Technology',
    subTitle:
      'The end of 2022 and early 2023 was a blatant disaster for the cryptocurrency industry.',
    coverImage: 'assets/blockchain.jpg',
  },
  {
    id: 3,
    title: 'WhatsApp spying on Android users at night?',
    subTitle:
      'A Google Pixel user, who is an engineer at Twitter, reported his microphone being accessed by WhatsApp at night.',
    coverImage: 'assets/whatsapp.webp',
  },
  {
    id: 4,
    title: 'Nuclear Energy Is Surprisingly “Green” And Safe',
    subTitle:
      'According to Reuters, the US Nuclear Regulatory Commission (NRC) approved temporary nuclear waste storage. ',
    coverImage: 'assets/nuclear.jpg',
  },
  {
    id: 5,
    title: 'Do People Really Want AI In Social Media?',
    subTitle:
      'In May 2023, it’s impossible to escape the sweeping implementation of artificial intelligence, consumer technology.',
    coverImage: 'assets/socialmedia.jpg',
  },
];

export const LatestNews: News[] = [
  {
    id: 1,
    title: 'Canon launches Powershot V10.',
    subTitle:
      'Canon has introduced a pocket-sized, dedicated vlogging camera, the Canon PowerShot V10.',
    coverImage: 'assets/canon.jpg',
  },
  {
    id: 2,
    title: 'WhatsApp now accessible on smartwatches.',
    subTitle: 'The open-sourced innovation got a Google I/O 2023 launch',
    coverImage: 'assets/whataspplates.webp',
  },
  {
    id: 3,
    title: 'Apple iPhone 14 Pro Long-term (Six Months)',
    subTitle: 'The open-sourced innovation got a Google I/O 2023 launch',
    coverImage: 'assets/applelatest.jpg',
  },
  {
    id: 4,
    title: 'Samsung Galaxy M14 5G: An impressive all-rounder.',
    subTitle: 'The open-sourced innovation got a Google I/O 2023 launch',
    coverImage: 'assets/samsungm4.jpg',
  },
  {
    id: 5,
    title: 'Samsung launches new 8K TV Models',
    subTitle: 'The open-sourced innovation got a Google I/O 2023 launch',
    coverImage: 'assets/samsungtv.webp',
  },
  {
    id: 6,
    title: 'Here’s why NVIDIA Studio Ready laptops from MSI offer creators',
    subTitle: 'The open-sourced innovation got a Google I/O 2023 launch',
    coverImage: 'assets/nvidida.jpg',
  },
  {
    id: 7,
    title: 'Samsung Galaxy S23+: The perfect all-rounder that balances',
    subTitle: 'The open-sourced innovation got a Google I/O 2023 launch',
    coverImage: 'assets/samsungs23.webp',
  },
  {
    id: 8,
    title: 'The iPad Killer? OnePlus’s upcoming tablet',
    subTitle: 'The open-sourced innovation got a Google I/O 2023 launch',
    coverImage: 'assets/ipadkiller.jpg',
  },
  {
    id: 9,
    title: 'Gigabyte launches new gaming laptops with 13th Gen',
    subTitle: 'The open-sourced innovation got a Google I/O 2023 launch',
    coverImage: 'assets/rtx40.jpg',
  },
  {
    id: 10,
    title: 'OnePlus Nord Buds 2 Review: Nord Buds with ANC',
    subTitle: 'The open-sourced innovation got a Google I/O 2023 launch',
    coverImage: 'assets/oneplusbud.jpg',
  },
  {
    id: 11,
    title: 'Tecno launches Phantom V Fold - the most ‘affordable’ ',
    subTitle: 'The open-sourced innovation got a Google I/O 2023 launch',
    coverImage: 'assets/techno.jpg',
  },
  {
    id: 12,
    title: 'Next entry-level budget iPad will be powered by A14 chip',
    subTitle: 'The open-sourced innovation got a Google I/O 2023 launch',
    coverImage: 'assets/applea14.webp',
  },
];

export const PhoneNews: News[] = [
  {
    id: 1,
    title: 'HTC U23 Pro Compatible With Viverse VR to be Launch on May 18',
    subTitle:
      'HTC U23 Pro is confirmed to launch globally next week. The Taiwanese smartphone maker recently launched the HTC Wildfire E2 Play.',
    coverImage: 'assets/htc.jpg',
  },
  {
    id: 2,
    title: "OnePlus Nord 3 5G Reportedly Spotted on Company's Website",
    subTitle:
      'OnePlus Nord 3 5G is expected to launch soon in India. The phone is said to succeed the OnePlus Nord 2 model',
    coverImage: 'assets/oneplus.jpg',
  },
  {
    id: 3,
    title:
      'Vivo S17 Pro Reportedly Spotted on Website Camera Specifications Tipped',
    subTitle:
      'Vivo S17 Pro is reportedly in the works. The Vivo S17 series is expected to succeed the Vivo 16 series — which included the Vivo S16, Vivo S16e and Vivo S16 Pro',
    coverImage: 'assets/vivo.webp',
  },
  {
    id: 4,
    title:
      'Google Agrees to Pay $8 Million to Settle Claims Against Deceptive Pixel 4 Ads',
    subTitle:
      'Google has been scrutinized for antitrust and consumer protection infractions by the federal government and state attorneys general.',
    coverImage: 'assets/google.webp',
  },
  {
    id: 5,
    title:
      'Nubia Z60 Fold Specs, Launch Timeline Leaked 5000mAh Battery Tipped',
    subTitle:
      'Nubia Z60 Fold is reportedly in the works as the first foldable smartphone by the ZTE-owned smartphone brand.',
    coverImage: 'assets/nubia.jpg',
  },
  {
    id: 6,
    title:
      'Google Pixel 7a vs Google Pixel 7: What’s the noticable Difference?',
    subTitle:
      "Google Pixel 7a was launched earlier this week alongside Pixel Fold during the company's I/O event.",
    coverImage: 'assets/pixel.jpg',
  },
];

export const LaptopNews: News[] = [
  {
    id: 1,
    title: 'Alienware M16, Alienware x14 R2 Gaming Laptops. GeForce RTX ',
    subTitle:
      'Alienware m16 and Alienware x14 R2 gaming laptops were launched by the company on Friday.',
    coverImage: 'assets/alienware.jpg',
  },
  {
    id: 2,
    title: 'Google Announces App Streaming on ChromeOS Beta for Pixel & Xiaomi',
    subTitle:
      'Google has introduced the App Streaming feature to Chromebooks that will let users access their Android phone apps on the device.',
    coverImage: 'assets/chromeos.jpg',
  },
  {
    id: 3,
    title: 'iPhone Maker Foxconn Buys Massive Piece to Diversify Production',
    subTitle:
      'Foxconn has manufactured Apple handsets in India since 2019 at its plant in the southern state of Tamil Nadu.',
    coverImage: 'assets/foxconn.jpg',
  },
  {
    id: 4,
    title:
      'Google Begins Rolling Out Passkeys, a Secure Way to Sign Into Apps & Websites',
    subTitle:
      'After nearly a decade of groundwork and a year of announcing support for same, Google has finally rolling out support for the passkeys authentication system.',
    coverImage: 'assets/passkey.jpg',
  },
  {
    id: 5,
    title: 'AMD Ryzen 7040U Series CPUs for Ultra-Slim Laptops Unveiled',
    subTitle:
      'Following the announcements of its high-performance Ryzen 7000-series CPUs for desktops and mainstream laptops',
    coverImage: 'assets/amd.jpg',
  },
  {
    id: 6,
    title:
      'Apple Likely to Report 4% Drop in Quarterly Revenue Despite Recovery in China',
    subTitle:
      'Apple will likely report a more than 4 percent drop in revenue, its second straight quarterly decline, weighed down by consumers.',
    coverImage: 'assets/apple.jpg',
  },
];

export const GamingNews: News[] = [
  {
    id: 1,
    title: 'God of War Ragnarok Player Discovers Incredible Freya Detail',
    subTitle:
      'A player of Santa Monica Studio’s critically acclaimed God of War Ragnarok captures video of an incredible Freya detail in the game’s Photo Mode.',
    coverImage: 'assets/gow.jpg',
  },
  {
    id: 2,
    title: 'Destiny 2 Player Self-Made and Extremely Accurate Thorn Replica',
    subTitle:
      'A Destiny 2 player highlights a replica of their own design which captures the exotic hand cannon Thorn in highly accurate detail.',
    coverImage: 'assets/destiny2.jpg',
  },
  {
    id: 3,
    title: 'Call of Duty: Warzone 2 Clip Highlights Cursed Intervention Bug',
    subTitle:
      'A Call of Duty: Warzone 2 player shows off a cursed Intervention bug, with the brand-new weapon not quite working as originally intended.',
    coverImage: 'assets/cod.jpg',
  },
  {
    id: 4,
    title:
      'Call of Duty: Modern Warfare 2 Player Gets Unbelievable, Kill From Spawn',
    subTitle:
      'A Call of Duty: Modern Warfare 2 player shares an incredible clip in which they get an absurd 5-person kill from their own spawn.',
    coverImage: 'assets/cod2.jpg',
  },
  {
    id: 5,
    title: "Gamer's Grandma Reaches Absurd Milestone in Animal Crossing",
    subTitle:
      "A gamer online shares their grandma's impressive achievement of reaching an absurd Nook Miles milestone in Animal Crossing: New Horizons.",
    coverImage: 'assets/grandma.jpg',
  },
  {
    id: 6,
    title: 'Pokemon Fan Creates a Fun Water-Type Regional Variant for Diancie',
    subTitle:
      'A Pokemon fan creates a very fun and creative regional variant of the mythical Pokemon Diancie, which comes with an equally inspired Mega Evolution.',
    coverImage: 'assets/pokemon.jpg',
  },
];
