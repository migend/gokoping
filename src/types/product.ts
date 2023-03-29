export interface Root {
  msg: string
  data: Daum[]
}

export interface Daum {
  catalogEntryView: CatalogEntryView[]
}

export interface CatalogEntryView {
  hasSingleSKU: boolean
  catalogEntryTypeCode: string
  fullImage: string
  isPrivateSales: boolean
  canonicalUrl: string
  name: string
  longDescription: string
  thumbnail_ovr: string
  storeID: string
  attachments: Attachment[]
  partNumber: string
  fullImage_ovr: string
  otherColors: string
  onSale: boolean
  price_TRY_4000000000000059002: string
  uniqueID: string
  onSaleEnabled: boolean
  sKUs: SKu[]
  lifeCycle: string
  englishName: string
  thumbnail: string
  parentCatalogEntryID: string
  shortDescription: string
  onsale_hasInventory: boolean
  mfPartNumber_ntk: string
  buyable: boolean
  attributes: Attribute[]
  preOrder: boolean
  sizeCodes: SizeCode[]
  otherVariants: OtherVariant[]
  colors: string
  styleCode: string
  composition: string
  dtf: string
  price: Price[]
  akeneoData: AkeneoData
}

export interface Attachment {
  attachmentAssetPath: string
  usage: string
  identifier: string
  mimeType: string
}

export interface SKu {
  hasSingleSKU: boolean
  onSale: boolean
  catalogEntryTypeCode: string
  price_TRY_4000000000000059002: string
  uniqueID: string
  lifeCycle: string
  skuDummy: string
  fullImage: string
  englishName: string
  price: SKUPrice[]
  thumbnail: string
  isPrivateSales: boolean
  onsale_hasInventory: boolean
  shortDescription: string
  mfPartNumber_ntk: string
  name: string
  buyable: string
  thumbnail_ovr: string
  attributes: SKUAttribute[]
  storeID: string
  preOrder: boolean
  fullImage_ovr: string
  partNumber: string
  attachments: any[]
}

export interface SKUPrice {
  description: string
  value: string
  usage: string
  currency: string
  formattedPrice: string
  formattedPriceWithoutCurrency: string
  percentage?: string
  formattedPercentage?: string
}

export interface SKUAttribute {
  storeDisplay: boolean
  values: Value[]
  sequence: string
  name: string
  uniqueID: string
  usage: string
  comparable: boolean
  displayable: boolean
  variant: boolean
  identifier: string
  facetable: boolean
  searchable: boolean
}

export interface Value {
  sequence: string
  hexCode: string
  value: string
  uniqueID: string
  unitID: string
  unitOfMeasure: string
  identifier: string
}

export interface Attribute {
  storeDisplay: boolean
  uniqueID: string
  comparable: boolean
  displayable: boolean
  variant: boolean
  facetable: boolean
  values: Value2[]
  sequence: string
  associatedKeyword: string
  name: string
  usage: string
  identifier: string
  searchable: boolean
}

export interface Value2 {
  sequence: string
  hexCode: string
  value: string
  uniqueID: string
  unitID: string
  unitOfMeasure: string
  identifier: string
}

export interface SizeCode {
  sequence: string
  hexCode: string
  value: string
  uniqueID: string
  unitID: string
  unitOfMeasure: string
  identifier: string
  partNumberSize: string
  skuUniqueId: string
  buyable: string
  onSale: boolean
}

export interface OtherVariant {
  uniqueID: string
  partNumber: string
  color: string
  fullImage: string
  thumbnail: string
  hexCode: string
  available: string
}

export interface Price {
  description: string
  value: string
  usage: string
  currency: string
  formattedPrice: string
  formattedPriceWithoutCurrency: string
  percentage?: string
  formattedPercentage?: string
}

export interface AkeneoData {
  pdpUrl: string
  productType: string
  breadcrumb: Breadcrumb[]
}

export interface Breadcrumb {
  code: string
  URL: string
  label: string
}
