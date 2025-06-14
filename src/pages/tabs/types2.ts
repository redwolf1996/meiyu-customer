export interface AllItems {
  cardCategory: Category[]
  cardList: CardList[]
  productCategory: Category[]
  productList: ProductList[]
  serviceCategory: Category[]
  serviceList: ServiceList[]
}

export interface Category {
  id: number
  name: string
  storeId: number
}

export interface CardList {
  id: number
  /**
   * 卡类型 1->次卡，2->充值卡，3->折扣卡
   */
  type: 1 | 2 | 3
  secondType: number
  gift: number
  name: string
  categoryId: number
  price: number
  expires: number
  countLimit?: number
  isShow?: boolean
  totalCount?: number
  discount?: number
  info?: Info[]
  checked?: boolean
  disabled?: boolean
}

export interface Info {
  cardId: number
  equity: number
  price: number
  price2: number
  productId: number
  productName: string
  serviceId: number
  serviceName: string
  [property: string]: any
}

export interface ProductList {
  categoryId?: number
  categoryName?: string
  coverImg?: string
  desc?: string
  id?: number
  inventory?: number
  isShow?: number
  name?: string
  price?: number
  price2?: number
  storeId?: number
  unit?: string
  checked?: boolean
  disabled?: boolean
  prodType?: 1 // 1产品 2服务
  /**
   * 购买的数量
   */
  goodsCount?: any
  /**
   * 次卡表示数量，折扣充值卡表示折扣1.0-10.0
   */
  equity?: any
  /**
   * 服务优惠前总价
   */
  totalAmount?: any
  /**
   * 服务优惠后总价
   */
  amount?: any
  /**
   * 使用卡项时 卡项优惠(扣减)的金额
   */
  cardReduceAmount?: any
  /**
   * 使用卡项时 卡项展示的名称 例如：洗发次卡 -1次
   */
  cardShowName?: any
  [property: string]: any
}

export interface ServiceList {
  categoryId?: number
  categoryName?: string
  coverImg?: string
  desc?: string
  duration?: number
  durationUnit?: string
  id?: number
  isShow?: number
  isToDoor?: number
  isToStore?: number
  name?: string
  payType?: number
  price?: number
  price2?: number
  serviceColor?: string
  storeId?: number
  checked?: boolean
  disabled?: boolean
  prodType?: 2 // 1产品 2服务
  /**
   * 购买的数量
   */
  goodsCount?: any
  /**
   * 次卡表示数量，折扣充值卡表示折扣1.0-10.0
   */
  equity?: any
  /**
   * 服务优惠前总价
   */
  totalAmount?: any
  /**
   * 服务优惠后总价
   */
  amount?: any
  /**
   * 使用卡项时 卡项优惠(扣减)的金额
   */
  cardReduceAmount?: any
  /**
   * 使用卡项时 卡项展示的名称 例如：洗发次卡 -1次
   */
  cardShowName?: any
  [property: string]: any
}

export interface CatsItemsTree<T> {
  id: number
  label: string
  items: T[]
}

export interface AvailableCard {
  amount: number
  /**
   * 卡id
   */
  cardId: number
  /**
   * 卡名称
   */
  cardName: string
  /**
   * 卡二级分类，次卡 0非次卡，1->有限次卡，2->不限次卡，3->通卡
   */
  cardSecondType?: number
  /**
   * 卡类别 1->次卡，2->充值卡，3->折扣卡
   */
  cardType?: number
  cardTypeDesc: string
  /**
   * 共用次数上限，无限次通卡
   */
  countLimit: number
  /**
   * 购卡id
   */
  customerCardId: number
  /**
   * 次卡表示数量，折扣充值卡表示折扣1.0-10.0
   */
  equity: number
  /**
   * 有效期结束
   */
  expiresTime: string
  expiresTimeDesc: string
  gift: number
  /**
   * 商品id
   */
  goodsId: number
  /**
   * 商品名
   */
  goodsName: string
  /**
   * 商品类型，1服务 2产品 3卡 4预约
   */
  goodsType: number
  /**
   * 是否长期有效
   */
  isLongTerm: number
  /**
   * 是否可用
   */
  isValid: number
  /**
   * 不可用原因
   */
  reason: string
  /**
   * 有效期开始
   */
  startTime: string
  /**
   * 储值卡总可用金额
   */
  totalAmount: number
  [property: string]: any
}

/**
 * 上一页面
 * billing：开单
 * card：卡项设置
 * equity：修改卡项权益
 */
export type FromType = 'billing' | 'card' | 'equity'

export interface ListStaff {
  /**
   * 头像
   */
  avatar: string
  createBy: number
  createTime: string
  /**
   * 性别
   */
  gender: number
  /**
   * 职务
   */
  jobCode: number
  /**
   * 职务
   */
  jobDesc: string
  /**
   * 机构员工id
   */
  orgStaffId: number
  /**
   * 手机号
   */
  phone: string
  /**
   * 角色 1店长，2销售，3手艺人
   */
  roleCode: number
  /**
   * 角色描述
   */
  roleDesc?: string
  /**
   * 登录人平台唯一id
   */
  staffId: number
  /**
   * 门店员工id
   */
  storeStaffId: number
  /**
   * 姓名
   */
  userName: string
  /**
   * 是否选中（用于列表选择）
   */
  active?: boolean
}

export interface BookForm {
  /**
   * 上门服务地址
   */
  customerAddress?: string | null
  /**
   * 分配的手艺人
   */
  artisanId: number
  /**
   * 储值卡id，储值卡支付时必填
   */
  customerCardId?: number
  /**
   * 备注
   */
  notes: string
  /**
   * 支付方式，立即支付时必填
   */
  payType: number
  /**
   * 预约的服务列表
   */
  service: Partial<Service>[]
  /**
   * 支付总金额
   */
  amount?: number | ComputedRef<number>
  /**
   * 服务开始时间，yyyy-MM-dd HH:mm:ss
   */
  startTime: ComputedRef<string>
  /**
   * 手机号查询到的门店客户id
   */
  storeCustomerId?: any
  /**
   * 客户姓名
   */
  storeCustomerName: any
  /**
   * 客户手机号
   */
  storeCustomerPhone: any
  /**
   * 当前门店id，当前门店id
   */
  storeId: number
  /**
   * 服务类型，1到店，2上门
   */
  storeServiceType: number
}

export interface Service {
  /**
   * 上门服务地址
   */
  customerAddress?: string | null
  /**
   * 卡id
   */
  cardId?: number
  /**
   * 用的购卡id
   */
  customerCardId?: number
  /**
   * 数量
   */
  goodsCount?: number
  /**
   * 服务id
   */
  storeServiceId?: number
  /**
   * 优惠前总金额
   */
  totalAmount?: number | ComputedRef<number>
  /**
   * 使用卡项优惠(扣减)金额
   */
  cardReduceAmount?: number | ComputedRef<number>
  /**
   * 服务优惠后总金额
   */
  amount?: number | ComputedRef<number>
  /**
   * 选择卡项并有优惠时候显示的名字 例: xxx卡项 -1次
   */
  cardShowName?: string
  cardName?: string // 卡项名称
  /**
   * 卡类别 1->次卡，2->充值卡，3->折扣卡
   */
  cardType?: number
  /**
   * 卡二级分类，次卡 0非次卡，1->有限次卡，2->不限次卡，3->通卡
   */
  cardSecondType?: number
  name?: string
  duration?: number
  price?: number
  price2?: number
  coverImg?: string
  /**
   * 次卡可扣减的次数
   */
  equity?: number
  [property: string]: any
}

export interface Customer {
  /**
   * 详细地址
   */
  address?: string
  /**
   * 顾问，员工列表storeStaffId
   */
  adviserId?: number | null | ''
  /**
   * 手艺人，员工列表storeStaffId
   */
  artisanId?: number | null | ''
  /**
   * 头像
   */
  avatar?: string
  /**
   * 生日
   */
  birthday?: string
  /**
   * 市
   */
  city?: string
  /**
   * 区
   */
  county?: string
  /**
   * 性别，0->未知；1->男；2->女
   */
  gender: number
  /**
   * 会员等级，1->普通客户，2->vip客户
   */
  level?: number
  /**
   * 姓名，名称
   */
  name: string
  /**
   * 备注名
   */
  noteName?: string
  /**
   * 备注
   */
  notes?: string
  /**
   * 手机号
   */
  phone: string
  /**
   * 省
   */
  province?: string
  /**
   * 来源，ON_LINE(1,"线上"),     OFFLINE(2,"线下"),     INTRODUCE(3,"转介绍"),
   * WALK_IN(4,"walk-in"),     OTHER(5,"其他"),;
   */
  source?: number
  sourceDesc?: string | number
  /**
   * 当前门店id，当前门店id
   */
  storeId: number
  /**
   * 微信
   */
  wechatCode?: string
  id?: string | number | null
}

export interface CustomerDetail {
  /**
   * 地址
   */
  address: string
  /**
   * 顾问
   */
  adviserId: number
  /**
   * 顾问姓名
   */
  adviserName: string
  /**
   * 余额
   */
  amount: number
  /**
   * 手艺人
   */
  artisanId: number
  /**
   * 手艺人姓名
   */
  artisanName: string
  /**
   * 头像
   */
  avatar: string
  birthday: string
  /**
   * 购卡数
   */
  cardC: number
  /**
   * 市
   */
  city: string
  /**
   * 区
   */
  county: string
  createBy: number
  createTime: string
  /**
   * 客户id
   */
  customerId: number
  /**
   * 消费次数
   */
  expendC: number
  /**
   * 性别，1男，2女，0未知
   */
  gender: string
  /**
   * 累计消费
   */
  historyExpend: number
  /**
   * 累计获取积分
   */
  historyIntegration: number
  /**
   * 店铺客户id
   */
  id: number
  /**
   * 可用积分
   */
  integration: number
  lastPayTime: string
  /**
   * 会员等级，1->普通客户，2->vip客户
   */
  level: string | number
  /**
   * 姓名
   */
  name: string
  /**
   * 备注名
   */
  noteName: string
  /**
   * 备注
   */
  notes: string
  orgId: number
  /**
   * 手机号
   */
  phone: string
  /**
   * 省
   */
  province: string
  /**
   * 来源
   */
  source: string
  sourceDesc?: string | number
  /**
   * 店铺
   */
  storeId: number
  updateBy: number
  updateTime: string
  /**
   * 微信
   */
  wechatCode: string
}

export interface TimeOccupy {
  /**
   * 手艺人id
   */
  artisanId: number
  /**
   * 日期
   */
  currentDate: string
  /**
   * 时长
   */
  duration: number
  /**
   * 占用时段格子index
   */
  employIndex: number[]
  /**
   * 开始时间
   */
  startTime: string
  [property: string]: any
}

export interface BookingData {
  /**
   * 地址
   */
  address: string
  /**
   * 看板格子时长, 分钟
   */
  bookingDuration: number
  /**
   * 市
   */
  city: string
  /**
   * 区
   */
  county: string
  createTime: string
  /**
   * 简介
   */
  desc: string
  /**
   * 主键id
   */
  id: number
  /**
   * 经纬度
   */
  locationX: string
  /**
   * 经纬度
   */
  locationY: string
  /**
   * 门店logo
   */
  logo: string
  /**
   * 所属组织
   */
  orgId: number
  /**
   * 联系电话
   */
  phone: string
  /**
   * 可提现收入
   */
  platformAmount: number
  /**
   * 省
   */
  province: string
  /**
   * 状态, 1营业中，2停业
   */
  status: number
  /**
   * 状态中文描述
   */
  statusDesc: string
  /**
   * 门店名
   */
  storeName: string
  toDoorEtime: string
  toDoorStime: string
  /**
   * 上门时间
   */
  toDoorWeek: number[]
  /**
   * 累计收入
   */
  totalAmount: number
  /**
   * 修改时间
   */
  updateTime: string
  workEtime: string
  workStime: string
  /**
   * 营业时间
   */
  workWeek: number[]
}

export interface StoreListJoin {
  /**
   * 地址
   */
  address: string
  /**
   * 简介
   */
  desc: string
  /**
   * 门店id，storeId
   */
  id: number
  /**
   * 门店logo
   */
  logo: string
  orgId: number
  /**
   * 联系方式
   */
  phone: string
  /**
   * 状态，1->营业中，2->停业；目前没有关店状态
   */
  status: number
  /**
   * 门店名称
   */
  storeName: string
  /**
   * 营业时间
   */
  workEtime: string
  /**
   * 营业时间
   */
  workStime: string
  /**
   * 营业时间
   */
  workWeek: number[] | null
}
