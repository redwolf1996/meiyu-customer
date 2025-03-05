export interface List {
  customerPhone?: string
  customerName?: string
  createSourceType?: string
  createSource?: number
  /**
   * 金额
   */
  amount: number
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 订单id
   */
  id: number
  orderItem: OrderItem[]
  /**
   * 订单编号
   */
  orderNo: string
  /**
   * 支付状态，1待支付，2已支付，3未支付取消，4退款
   */
  payStatus: number
  /**
   * 搜索状态
   * 101待支付，102待服务，103已完成，104已取消，105已退款
   */
  searchStatus?: number
  /**
   * 支付状态名
   */
  payStatusDesc: string
}

export interface OrderItem {
  artisanId?: number
  artisanName?: string
  cardName?: string
  customerCardId?: number
  /**
   * 商品总价
   */
  amount: number
  /**
   * 商品数量
   */
  goodsCount: number
  /**
   * 商品头图
   */
  goodsCoverImg: string
  /**
   * 商品id
   */
  goodsId: number
  /**
   * 商品名
   */
  goodsName: string
  /**
   * 商品价格
   */
  goodsPrice: number
  /**
   * 商品类型，1服务 2产品 3卡 4预约 5充值
   */
  goodsType: number
  /**
   * 商品卡类型，1次卡，2折扣卡 3充值卡
   */
  goodsCardType?: number
}

export interface ListPoints {
  /**
   * 时间
   */
  createTime: string
  customerId: number
  id: number
  /**
   * 积分数
   */
  integration: number
  notes: string
  orderId: number
  /**
   * 订单类别
   */
  orderNo: string
  /**
   * 订单支付状态
   */
  orderPayStatus: number
  orgId: number
  /**
   * 门店客户id
   */
  storeCustomerId: number
  storeId: number
  /**
   * 类别，1得到，2扣除
   */
  type: number
}

export interface CusList {
  /**
   * 充值卡剩余金额
   */
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
   * 卡类别 1->次卡，2->充值卡，3->折扣卡
   */
  cardType: number
  /**
   * 卡类别描述
   */
  cardTypeDesc: string
  /**
   * 卡二级分类，次卡 0非次卡，1->有限次卡，2->不限次卡，3->通卡
   */
  cardSecondType?: number
  /**
   * 不限次卡次数上限；有限次卡总次数
   */
  countLimit: number
  /**
   * 折扣卡列表页描述
   */
  discountDesc?: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 客户头像
   */
  customerAvatar: string
  /**
   * 客户id
   */
  customerId: number
  /**
   * 客户名
   */
  customerName: string
  /**
   * 客户手机号
   */
  customerPhone: string
  /**
   * 有效期结束时间
   */
  expiresTime: string
  /**
   * 到期时间
   */
  expiresTimeDesc: string
  /**
   * 充值卡剩余赠送
   */
  gift: number
  id: number
  /**
   * 是否长期卡
   */
  isLongTerm: number
  /**
   * 1有效，0无效
   */
  isValid: number
  /**
   * 订单id
   */
  orderId: number
  /**
   * 购买实付（储值卡首次支付金额）
   */
  payAmount: number
  /**
   * 有效开始时间
   */
  startTime: string
  /**
   * 门店客户id
   */
  storeCustomerId: number
  storeId: number
  /**
   * 累计充值
   */
  totalAmount: number
  /**
   * 累计赠送
   */
  totalGift: number
  /**
   * 次卡使用次数
   */
  useCount: number
}
