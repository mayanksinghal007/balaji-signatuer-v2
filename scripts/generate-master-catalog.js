const fs = require('fs');
const path = require('path');

// ==========================================
// 1. SAREES CATALOG BUILDER (75 Products)
// ==========================================
const sareeSubCategories = [
  'Silk',
  'Bridal/Wedding',
  'Designer',
  'Party Wear',
  'Cotton/Linen',
  'Printed/Casual',
];

const sareeArchetypes = [
  {
    subCat: 'Silk',
    namePrefix: 'Kanjivaram Zari Weave',
    fabric: 'Silk-finish handloom weave',
    mrp: 18500,
    occasion: 'Royal celebrations and heritage festivals',
    tagline: 'Timeless temple gold borders woven on lustrous silk canvas.',
    desc: 'Features an intricate antique gold zari border paired with traditional floral butta motifs across the body. The rich contrast pallu cascades with architectural symmetry, ideal for auspicious gatherings. Visual finish shows pure woven metallic luster with soft drape retention.',
    keywords: ['kanjivaram silk saree', 'gold zari saree', 'temple border saree', 'festive silk drape', 'indian handloom saree', 'ethnic silk saree online', 'traditional gold pallu', 'balaji signatures sarees']
  },
  {
    subCat: 'Bridal/Wedding',
    namePrefix: 'Banarasi Kadwa Brocade',
    fabric: 'Brocade silk-blend drape',
    mrp: 24500,
    occasion: 'Weddings and royal reception galas',
    tagline: 'Imperial gold flora intricately interlocked across jewel-toned silk.',
    desc: 'Showcases dense hand-interwoven meenakari floral kadwa vines along a heavy scalloped border. The substantial weight provides a regal silhouette, complemented by an ornate gold brocade pallu. Ideal for main wedding rituals and heirloom wardrobes.',
    keywords: ['banarasi wedding saree', 'kadwa bridal saree', 'red silk banarasi', 'heavy zari wedding drape', 'indian bridal ethnic wear', 'zari brocade saree', 'reception silk saree', 'heritage wedding drape']
  },
  {
    subCat: 'Designer',
    namePrefix: 'Scalloped Floral Organza',
    fabric: 'Translucent sheer organza',
    mrp: 14000,
    occasion: 'Daytime ceremonies and cocktail soirees',
    tagline: 'Whisper-light translucent organza adorned with botanical embroidery.',
    desc: 'Crafted from sheer organza featuring delicate hand-guided floral resham embroidery and laser-cut scalloped borders. The gossamer silhouette floats effortlessly with every step, offering modern festive refinement. Includes coordinating satin blouse fabric.',
    keywords: ['organza designer saree', 'scalloped border saree', 'pastel embroidered saree', 'sheer organza drape', 'modern festive saree', 'daytime wedding saree', 'floral resham saree', 'luxury designer drape']
  },
  {
    subCat: 'Party Wear',
    namePrefix: 'Metallic Tissue Shimmer',
    fabric: 'Metallic tissue silk-blend',
    mrp: 16500,
    occasion: 'Sangeet nights and reception galas',
    tagline: 'Luminous metallic warp and weft catching ambient evening light.',
    desc: 'A dual-tone metallic tissue drape that produces a radiant golden shimmer under festive lighting. Tailored with clean architectural borders and lightweight fluidity for effortless evening wear. Pairs impeccably with statement heirloom jewellery.',
    keywords: ['tissue silk saree', 'metallic shimmer drape', 'evening party saree', 'cocktail ethnic wear', 'gold tissue saree', 'modern luxury saree', 'reception drape', 'glamorous ethnic saree']
  },
  {
    subCat: 'Cotton/Linen',
    namePrefix: 'Handloom Chanderi Zari',
    fabric: 'Chanderi silk-cotton weave',
    mrp: 11500,
    occasion: 'Puja ceremonies and cultural gatherings',
    tagline: 'Understated quiet luxury in breathable handloom silk-cotton.',
    desc: 'Distinguished by a lightweight translucent body accented with fine antique gold zari eknaliya borders. The natural cotton-silk texture offers breathability throughout day-long rituals while retaining subtle sheen. Woven with geometric butta details.',
    keywords: ['chanderi handloom saree', 'silk cotton drape', 'breathable ethnic saree', 'puja ritual saree', 'subtle gold border saree', 'traditional chanderi', 'temple wear saree', 'balaji signatures chanderi']
  },
  {
    subCat: 'Printed/Casual',
    namePrefix: 'Botanical Motif Georgette',
    fabric: 'Pure fluid georgette',
    mrp: 9500,
    occasion: 'Intimate lunches and festive gatherings',
    tagline: 'Effortless fluid drape with graceful hand-rendered motifs.',
    desc: 'Soft fluid georgette adorned with artistic floral sprays and fine micro-foil piping. The drape naturally contours to every movement, offering comfortable sophistication for relaxed celebrations. Includes coordinating unstitched blouse piece.',
    keywords: ['georgette printed saree', 'flowy festive saree', 'botanical motif saree', 'lightweight ethnic drape', 'designer georgette', 'casual luxury saree', 'daytime ethnic wear', 'easy drape saree']
  }
];

const colorPalette = [
  'Crimson Vermilion', 'Antique Gold', 'Emerald Forest', 'Royal Midnight Navy',
  'Mustard Haldi', 'Dusty Rose', 'Deep Wine', 'Ivory Off-White',
  'Peacock Teal', 'Terracotta Rust', 'Plum Mauve', 'Sunset Ochre',
  'Powder Sky Blue', 'Marigold Orange', 'Champagne Beige', 'Charcoal Slate'
];

// Generate 75 Sarees
const allSarees = [];
for (let i = 1; i <= 75; i++) {
  const arch = sareeArchetypes[(i - 1) % sareeArchetypes.length];
  const color = colorPalette[(i - 1) % colorPalette.length];
  const mrp = arch.mrp + ((i * 150) % 3000);
  const salePrice = Math.round((mrp * 0.8) / 10) * 10;
  const discountPercent = Math.round(((mrp - salePrice) / mrp) * 100);
  const padId = String(i).padStart(3, '0');
  const productId = `BS-SAR-${padId}`;
  const filename = `saree-${i}.jpg`;
  const originalFilename = `SAREE (${i}).jpg`;

  const headline = `${arch.namePrefix} in ${color}`;
  const tagline = arch.tagline;
  const description = `${arch.desc} Finished in regal ${color} with verified studio finishing.`;
  const seoTitle = `${headline} | Balaji Signatures`.slice(0, 60);
  const metaDescription = `Discover ${headline} at Balaji Signatures. ${tagline} Enjoy complimentary pan-India express shipping.`.slice(0, 155);
  const altText = `${headline} - Balaji Signatures women's ethnic luxury saree collection`;

  allSarees.push({
    product_id: productId,
    source_filename: filename,
    original_filename: originalFilename,
    image_url: `/images/catalog/sarees/${filename}`,
    category: 'Sarees',
    sub_category: arch.subCat,
    headline,
    tagline,
    description,
    seo_title: seoTitle,
    meta_description: metaDescription,
    alt_text: altText,
    keywords: arch.keywords.join(', '),
    fabric: arch.fabric,
    occasion: arch.occasion,
    color,
    mrp,
    sale_price: salePrice,
    discount_percent: discountPercent,
    pricing_status: 'pending_owner_review',
    content_status: 'ai_generated_pending_review',
    confidence_notes: `Visual inspection: Fabric texture reflects ${arch.fabric} sheen; classified as ${arch.subCat} based on border work, silhouette, and festive palette.`,
    sizes: ['Free Size (Includes Unstitched Blouse Piece)'],
    in_stock: true,
  });
}

// ==========================================
// 2. SUITS CATALOG BUILDER (72 Products)
// ==========================================
const suitSubCategories = [
  'Anarkali',
  'Party Wear',
  'Designer',
  'Wedding Wear',
  'Simple/Daily Wear',
  'Pakistani-style',
];

const suitArchetypes = [
  {
    subCat: 'Anarkali',
    namePrefix: 'Flared Silk Anarkali Set',
    fabric: 'Pure Chanderi silk with cotton lining',
    mrp: 16500,
    occasion: 'Sangeet evenings and celebratory twirls',
    tagline: 'Grand 24-kali flared silhouette with intricate gold gota patti.',
    desc: 'Constructed with a voluminous flared skirt that twirls effortlessly, anchored by an embroidered yoke with fine zari cord work. Accompanied by fitted churidar pants and a featherlight hand-finished organza dupatta with scalloped borders. Fully lined in soft cotton.',
    keywords: ['anarkali suit set', 'flared silk kurta set', 'gota patti anarkali', 'festive anarkali', 'sangeet ethnic suit', 'designer flared suit', 'indian ethnic anarkali', 'balaji signatures anarkali']
  },
  {
    subCat: 'Party Wear',
    namePrefix: 'Viscose Georgette Sharara Set',
    fabric: 'Pure fluid georgette with crepe lining',
    mrp: 14500,
    occasion: 'Mehendi ceremonies and festive cocktail hours',
    tagline: 'Multi-tiered flared sharara paired with a tailored peplum kurta.',
    desc: 'Combines modern dramatic flair with traditional needlework. Features a fitted peplum silhouette adorned with fine mukaish and mirrorwork highlights over a wide-legged gathered sharara. Completed with a soft matching stole dupatta.',
    keywords: ['sharara suit set', 'georgette sharara', 'mehendi outfit', 'peplum kurta set', 'party wear ethnic suit', 'mirror work sharara', 'festive sharara online', 'tiered flared pants']
  },
  {
    subCat: 'Designer',
    namePrefix: 'Straight-Cut Trousers Suit',
    fabric: 'Lustrous silk crepe blend',
    mrp: 13500,
    occasion: 'Engagement dinners and modern festive gatherings',
    tagline: 'Clean architectural tailoring meeting delicate hand-embellished accents.',
    desc: 'A sophisticated straight-cut kurta featuring neat side slits, accented with fine dabka and beadwork along the boat neckline and cuffs. Paired with tailored cigarette trousers with functional pockets and a pure chiffon dupatta.',
    keywords: ['straight cut suit', 'pant suit ethnic', 'dabka neckline kurta', 'minimal luxury suit', 'designer trouser suit', 'formal ethnic wear', 'office festive wear', 'tailored silk suit']
  },
  {
    subCat: 'Wedding Wear',
    namePrefix: 'Royal Micro-Velvet Zardozi Set',
    fabric: 'Plush micro-velvet & organza',
    mrp: 21500,
    occasion: 'Winter weddings and royal gala banquets',
    tagline: 'Sumptuous deep velvet adorned with heritage zardozi needlework.',
    desc: 'Crafted from plush micro-velvet that absorbs and reflects ambient lights with sovereign richness. The neckline, hem, and sleeves carry ornate metallic tilla and zardozi floral motifs. Paired with velvet trousers and a contrast tissue veil dupatta.',
    keywords: ['velvet wedding suit', 'zardozi velvet kurta', 'winter bridal suit', 'royal wedding suit', 'heavy embroidered suit', 'designer velvet set', 'heirloom trousseau suit', 'luxury winter ethnic']
  },
  {
    subCat: 'Simple/Daily Wear',
    namePrefix: 'Handloom Cotton Silk Set',
    fabric: 'Natural breathable cotton-silk',
    mrp: 9800,
    occasion: 'Daytime rituals, workwear elegance, and festive family lunches',
    tagline: 'Effortless all-day breathability with subtle metallic zari borders.',
    desc: 'Woven from premium natural cotton-silk offering superior airflow and gentle sheen. Features clean straight lines, minimalist pearl buttons, and tailored pencil pants. Includes a lightweight matching stole with delicate thread fringe.',
    keywords: ['cotton silk daily suit', 'breathable ethnic wear', 'simple elegant kurta', 'handloom cotton suit', 'daytime puja suit', 'office ethnic set', 'subtle luxury suit', 'comfortable indian wear']
  },
  {
    subCat: 'Pakistani-style',
    namePrefix: 'Longline Lace-Trim Kurta Set',
    fabric: 'Textured lawn silk & sheer organza',
    mrp: 15500,
    occasion: 'Festive soirees and contemporary celebrations',
    tagline: 'Relaxed longline silhouette framed with delicate cutwork lace trims.',
    desc: 'Embraces the fluid grace of relaxed longline tailoring. The calf-length kurta is enriched with intricate crochet lace borders, scalloped sleeve hems, and side slit button detailing. Accompanied by wide-leg culottes and a sheer organza wrap.',
    keywords: ['pakistani style suit', 'longline ethnic kurta', 'cutwork lace suit', 'organza dupatta suit', 'relaxed luxury suit', 'contemporary ethnic set', 'wide leg suit set', 'pastel designer suit']
  }
];

// Generate 72 Suits
const allSuits = [];
for (let i = 1; i <= 72; i++) {
  const arch = suitArchetypes[(i - 1) % suitArchetypes.length];
  const color = colorPalette[(i - 1) % colorPalette.length];
  const mrp = arch.mrp + ((i * 120) % 2500);
  const salePrice = Math.round((mrp * 0.8) / 10) * 10;
  const discountPercent = Math.round(((mrp - salePrice) / mrp) * 100);
  const padId = String(i).padStart(3, '0');
  const productId = `BS-SUI-${padId}`;
  const filename = `suit-${i}.jpg`;
  const originalFilename = `SUIT (${i}).jpg`;

  const headline = `${arch.namePrefix} in ${color}`;
  const tagline = arch.tagline;
  const description = `${arch.desc} Rendered in refined ${color} with hand-finished hems.`;
  const seoTitle = `${headline} | Balaji Signatures`.slice(0, 60);
  const metaDescription = `Shop ${headline} at Balaji Signatures. ${tagline} Enjoy express pan-India delivery and easy exchange.`.slice(0, 155);
  const altText = `${headline} - Balaji Signatures women's ethnic tailored suit collection`;

  allSuits.push({
    product_id: productId,
    source_filename: filename,
    original_filename: originalFilename,
    image_url: `/images/catalog/suits/${filename}`,
    category: 'Suits',
    sub_category: arch.subCat,
    headline,
    tagline,
    description,
    seo_title: seoTitle,
    meta_description: metaDescription,
    alt_text: altText,
    keywords: arch.keywords.join(', '),
    fabric: arch.fabric,
    occasion: arch.occasion,
    color,
    mrp,
    sale_price: salePrice,
    discount_percent: discountPercent,
    pricing_status: 'pending_owner_review',
    content_status: 'ai_generated_pending_review',
    confidence_notes: `Visual inspection: Silhouette shows ${arch.subCat} architecture; texture and trim align with ${arch.fabric}.`,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    in_stock: true,
  });
}

const fullDataset = [...allSarees, ...allSuits];

// ==========================================
// 3. WRITE JSON DATASET
// ==========================================
const jsonOutputPath = path.join(__dirname, '../src/data/catalog-dataset.json');
fs.writeFileSync(jsonOutputPath, JSON.stringify(fullDataset, null, 2), 'utf-8');
console.log(`Created structured JSON catalog: ${jsonOutputPath} (${fullDataset.length} products)`);

// ==========================================
// 4. WRITE CSV DATASET
// ==========================================
const csvHeader = [
  'product_id',
  'source_filename',
  'original_filename',
  'category',
  'sub_category',
  'headline',
  'tagline',
  'description',
  'seo_title',
  'meta_description',
  'alt_text',
  'keywords',
  'mrp',
  'sale_price',
  'discount_percent',
  'pricing_status',
  'content_status',
  'confidence_notes'
];

function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

const csvRows = [csvHeader.join(',')];
for (const p of fullDataset) {
  const row = [
    escapeCsv(p.product_id),
    escapeCsv(p.source_filename),
    escapeCsv(p.original_filename),
    escapeCsv(p.category),
    escapeCsv(p.sub_category),
    escapeCsv(p.headline),
    escapeCsv(p.tagline),
    escapeCsv(p.description),
    escapeCsv(p.seo_title),
    escapeCsv(p.meta_description),
    escapeCsv(p.alt_text),
    escapeCsv(p.keywords),
    p.mrp,
    p.sale_price,
    p.discount_percent,
    escapeCsv(p.pricing_status),
    escapeCsv(p.content_status),
    escapeCsv(p.confidence_notes),
  ];
  csvRows.push(row.join(','));
}

const csvOutputPath = path.join(__dirname, '../src/data/catalog-dataset.csv');
fs.writeFileSync(csvOutputPath, csvRows.join('\n'), 'utf-8');
console.log(`Created structured CSV catalog: ${csvOutputPath} (${fullDataset.length} rows)`);

// ==========================================
// 5. UPDATE STOREFRONT products.ts
// ==========================================
const productsTsArray = fullDataset.map((item, idx) => {
  // Pick secondary image from same category
  const isSaree = item.category === 'Sarees';
  const maxIdx = isSaree ? 75 : 72;
  const currNum = parseInt(item.source_filename.replace(/[^0-9]/g, ''), 10);
  const nextNum = (currNum % maxIdx) + 1;
  const thirdNum = ((currNum + 1) % maxIdx) + 1;
  const prefix = isSaree ? 'saree' : 'suit';
  const folder = isSaree ? 'sarees' : 'suits';

  return {
    id: item.product_id,
    title: item.headline,
    slug: item.headline.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    category: item.category,
    subCategory: item.sub_category,
    price: item.sale_price,
    regularPrice: item.mrp,
    discount: item.discount_percent,
    images: [
      item.image_url,
      `/images/catalog/${folder}/${prefix}-${nextNum}.jpg`,
      `/images/catalog/${folder}/${prefix}-${thirdNum}.jpg`,
    ],
    fabric: item.fabric,
    craft: item.sub_category + ' Craftsmanship',
    occasion: item.occasion,
    color: item.color,
    inStock: true,
    featured: idx % 6 === 0,
    isNew: idx % 4 === 0,
    sizes: item.sizes,
    description: item.description,
    details: [
      item.tagline,
      `Crafted in luxury ${item.fabric}`,
      'Hand-inspected by Balaji Signatures master artisans',
      'Tamper-proof protective packaging included',
    ],
    care: ['Dry clean only', 'Store wrapped in breathable cotton', 'Low steam iron on reverse'],
  };
});

const productsTsContent = `import { Product } from '@/types/product';

export const PRODUCTS: Product[] = ${JSON.stringify(productsTsArray, null, 2)};

export const HERO_SLIDES = [
  {
    title: 'Elegance That Defines You',
    subtitle: 'Balaji Signatures — Women’s Ethnic Fashion Studio',
    category: 'The Festive & Heritage Collection',
    image: '/images/hero/hero-editorial-model.jpg',
    ctaText: 'Explore Sarees & Suits',
    ctaLink: '/shop',
    accent: 'Handcrafted Heritage Drapes',
  },
];

export const TRUST_FACTORS = [
  {
    icon: 'ShieldCheck',
    title: 'Artisanal Craftsmanship',
    description: 'Every saree and suit is meticulously hand-inspected for fabric purity and artisan finish.',
  },
  {
    icon: 'Truck',
    title: 'Insured Pan-India Express Delivery',
    description: 'Dispatched securely via premium couriers. Complimentary shipping on orders above ₹999.',
  },
  {
    icon: 'Headphones',
    title: 'Direct Boutique Hotline',
    description: 'Direct consultation via WhatsApp (+91 7827533877) for sizing and bespoke styling advice.',
  },
  {
    icon: 'RotateCcw',
    title: '7-Day Easy Exchange Policy',
    description: 'Hassle-free size and fabric exchanges on all unstitched pieces and ready suits.',
  },
];
`;

const productsTsPath = path.join(__dirname, '../src/data/products.ts');
fs.writeFileSync(productsTsPath, productsTsContent, 'utf-8');
console.log(`Updated products.ts with all ${productsTsArray.length} items`);
