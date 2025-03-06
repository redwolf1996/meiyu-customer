---
title: kivi-beauty
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.28"

---

# kivi-beauty

Base URLs:

* <a href="https://api.test.meiyux.com/kivi-beauty">测试环境: https://api.test.meiyux.com/kivi-beauty</a>

# Authentication

# Default

## GET 服务测试接口

GET /test_api

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|B-Store-Id|header|integer| 否 |商家端当前门店id|
|envVersion|header|string| 否 |小程序环境变量|
|C-Store-Id|header|string| 否 |客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "wx_pay": "success",
    "mysql": "success",
    "redis": "success"
  }
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» wx_pay|string|true|none||none|
|»» mysql|string|true|none||none|
|»» redis|string|true|none||none|

## GET 临时测试用

GET /test1

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|B-Store-Id|header|integer| 否 |商家端当前门店id|
|envVersion|header|string| 否 |小程序环境变量|
|C-Store-Id|header|string| 否 |客户端当前门店id|

> 返回示例

```json
null
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|string|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

# 公共接口

## GET 平台信息

GET /about-platform

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|B-Store-Id|header|integer| 否 |商家端当前门店id|
|envVersion|header|string| 否 |小程序环境变量|
|C-Store-Id|header|string| 否 |客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "platformPhone": "15810746007",
    "platformEmail": "123@163.com",
    "platformQrCode": "http://kivi.cn/qrcode.png"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» platformPhone|string|true|none|平台联系电话|none|
|»» platformEmail|string|true|none|平台联系邮箱|none|
|»» platformQrCode|string|true|none|平台客服二维码|none|

## POST 上传文件

POST /upload

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|B-Store-Id|header|integer| 否 |商家端当前门店id|
|envVersion|header|string| 否 |小程序环境变量|
|C-Store-Id|header|string| 否 |客户端当前门店id|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 支付方式配置

GET /pay-type-conf

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|B-Store-Id|header|integer| 否 |商家端当前门店id|
|envVersion|header|string| 否 |小程序环境变量|
|C-Store-Id|header|string| 否 |客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "payType": [
      {
        "code": 3,
        "desc": "微信支付"
      },
      {
        "code": 1,
        "desc": "现金"
      },
      {
        "code": 2,
        "desc": "刷卡"
      },
      {
        "code": 4,
        "desc": "美团"
      },
      {
        "code": 5,
        "desc": "店铺二维码"
      }
    ],
    "refundType": [
      {
        "code": 2,
        "desc": "现金"
      },
      {
        "code": 3,
        "desc": "微信"
      },
      {
        "code": 4,
        "desc": "支付宝"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» payType|[object]|true|none|支付方式|none|
|»»» code|integer|true|none||none|
|»»» desc|string|true|none||none|
|»» refundType|[object]|true|none|退款方式|none|
|»»» code|integer|true|none||none|
|»»» desc|string|true|none||none|

# 商家端

## POST 商户微信登录

POST /business/wx-login

> Body 请求参数

```json
{
  "code": "zhongkui"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» code|body|string| 是 | 授权cod|none|

> 返回示例

```json
{
  "msg": "ok",
  "code": 200,
  "data": {
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbklkIjoiYzI0ZmQ0NTItMGMxMy00MWE3LWE3ZTEtMGU4N2JhYzUwNGRjIiwib3BlbmlkIjoib3BlbmlkIiwiYnVzaW5lc3NJZCI6MywidXNlclR5cGUiOiJidXNpbmVzcyJ9.ATtODvS61B_i1H4ghVnxlfP0HdC8rBWps0vRtIgM6UvHplmPlpAK0B7PfSQGlgYzIoWREU-ZBiT0JdWQ0mKiJg",
    "isRegister": 1
  }
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» token|string|true|none||none|
|»» isRegister|integer|true|none|是否已经存在注册信息|0未注册需要完善信息，此时token为临时token，完善信息后会返回新的token|

## POST 创建门店

POST /business/store

> Body 请求参数

```json
{
  "storeName": "5门店1",
  "logo": "",
  "phone": "18187475864",
  "address": "重庆吴忠市海淀区",
  "desc": "sint officia sunt",
  "province": "省",
  "city": "市",
  "county": "区"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeName|body|string| 是 | 店铺名称|none|
|» logo|body|string| 是 | 门店照片地址|none|
|» phone|body|string| 是 | 门店电话|none|
|» address|body|string| 是 | 门店地址|none|
|» desc|body|string| 否 | 门店简介|none|
|» province|body|string| 是 | 省|none|
|» city|body|string| 是 | 市|none|
|» county|body|string| 是 | 区|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## PUT 修改门店

PUT /business/store

> Body 请求参数

```json
{
  "id": "16",
  "storeName": "清别回北月",
  "logo": "elit voluptate",
  "phone": "18187475864",
  "address": "重庆吴忠市海淀区",
  "desc": "sint officia sunt",
  "province": "省",
  "city": "市",
  "county": "区"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|integer| 是 | 主键id|ID 编号|
|» storeName|body|string| 是 | 店铺名称|none|
|» logo|body|string| 是 | 门店照片|none|
|» phone|body|string| 是 | 门店电话|none|
|» address|body|string| 是 | 门店地址|none|
|» desc|body|string| 否 | 门店简介|none|
|» province|body|string| 是 | 省|none|
|» city|body|string| 是 | 市|none|
|» county|body|string| 是 | 区|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 订单详情

GET /business/order/{orderId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|orderId|path|string| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "orderId": 52,
    "orderNo": "1846908609243947008",
    "createSource": null,
    "createTime": "2024-10-17T21:38:20",
    "amount": 100,
    "payStatus": 2,
    "payType": 1,
    "payTime": null,
    "notes": "",
    "storeId": 28,
    "storeCustomerId": 7,
    "customerId": 0,
    "customerName": "化青",
    "customerPhone": "18125236520",
    "customerAvatar": "",
    "customerCardCount": 70,
    "adviserId": 0,
    "adviserName": null,
    "refundId": 0,
    "refundTime": null,
    "refundAmount": null,
    "orderItem": [
      {
        "goodsType": 4,
        "goodsId": 5,
        "goodsName": "服务2",
        "goodsCount": 2,
        "goodsPrice": 200,
        "amount": 100,
        "goodsCoverImg": "http://dummyimage.com/400x400",
        "artisanId": 6,
        "artisanName": "范娟",
        "customerCardId": 0,
        "cardName": ""
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» orderId|integer|true|none|订单id|none|
|»» orderNo|string|true|none|订单编号|none|
|»» createSource|null|true|none|1开单，2预约，3开卡，4充值|none|
|»» createTime|string|true|none|创建时间|none|
|»» amount|integer|true|none|订单支付金额|none|
|»» payStatus|integer|true|none|支付状态|1待支付，2已支付，3未支付取消，4已退费|
|»» payType|integer|true|none|支付类型|none|
|»» payTime|null|true|none||none|
|»» notes|string|true|none|备注|none|
|»» storeId|integer|true|none||none|
|»» storeCustomerId|integer|true|none|门店客户id|none|
|»» customerId|integer|true|none|客户注册id|none|
|»» customerName|string|true|none|客户名|none|
|»» customerPhone|string|true|none|客户手机号|none|
|»» customerAvatar|string|true|none|客户头像|none|
|»» customerCardCount|integer|true|none|客户卡数量|none|
|»» adviserId|integer|true|none||none|
|»» adviserName|null|true|none|销售|none|
|»» refundId|integer|true|none|退单取消id|none|
|»» refundTime|null|true|none|退单取消时间|none|
|»» refundAmount|null|true|none|退款金额|none|
|»» orderItem|[object]|true|none||none|
|»»» goodsType|integer|false|none|商品类别|1服务，2产品，3卡，4预约|
|»»» goodsId|integer|false|none||none|
|»»» goodsName|string|false|none||none|
|»»» goodsCount|integer|false|none||none|
|»»» goodsPrice|integer|false|none||none|
|»»» amount|integer|false|none||none|
|»»» goodsCoverImg|string|false|none||none|
|»»» artisanId|integer|false|none||none|
|»»» artisanName|string|false|none||none|
|»»» customerCardId|integer|false|none||none|
|»»» cardName|string|false|none||none|

## GET 获取商户信息

GET /business/info

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "businessId": 14,
    "createTime": "2024-10-13 16:01:32",
    "updateTime": null,
    "userName": "钟馗",
    "phone": "15192176273",
    "birthday": null,
    "email": "",
    "gender": "未知",
    "avatar": "",
    "inviteCode": "21014",
    "othersInviteCode": "",
    "status": 1,
    "loginDate": "2024-12-03 20:48:35",
    "orgId": 14,
    "storeList": [
      {
        "storeId": 3,
        "orgId": 14,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/58883566-6fc3-409e-a83a-c12b50135f19.jpg",
        "storeName": "钟馗的店",
        "phone": "15192176273",
        "address": "悦府",
        "desc": "钟馗家的店",
        "status": 1,
        "totalAmount": 3300,
        "platformAmount": 0,
        "createTime": "2024-10-13 16:03:46",
        "updateBy": 0,
        "updateTime": null,
        "isOwner": 1,
        "roleCode": 0,
        "roleDesc": null,
        "province": "370000",
        "city": "370100",
        "county": "370112",
        "locationX": "",
        "locationY": "",
        "bookingDuration": 15
      }
    ],
    "orgInfo": {
      "id": 14,
      "createTime": "2024-10-13 16:01:32",
      "storeCount": 1,
      "productCount": 1,
      "serviceCount": 4,
      "cardCount": 6,
      "staffCount": 1,
      "adminId": 14,
      "integration": 0,
      "historyIntegration": 0,
      "expiresTime": "2025-11-12 16:01:32"
    },
    "isExpires": 0,
    "lastStoreId": 0,
    "lastStoreName": "",
    "lastStore": {
      "storeId": 3,
      "orgId": 14,
      "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/58883566-6fc3-409e-a83a-c12b50135f19.jpg",
      "storeName": "钟馗的店",
      "phone": "15192176273",
      "address": "悦府",
      "desc": "钟馗家的店",
      "status": 1,
      "totalAmount": 3300,
      "platformAmount": 0,
      "createTime": "2024-10-13 16:03:46",
      "updateBy": 0,
      "updateTime": null,
      "isOwner": 1,
      "roleCode": 0,
      "roleDesc": null,
      "province": "370000",
      "city": "370100",
      "county": "370112",
      "locationX": "",
      "locationY": "",
      "bookingDuration": 15
    },
    "renewPrice": 60
  }
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» businessId|integer|true|none|商户id|登录人的唯一标识|
|»» createTime|string|true|none||创建时间|
|»» updateTime|null|true|none||none|
|»» userName|string|true|none|用户名|姓名|
|»» phone|string|true|none|手机号|手机号：为空标识未完善信息|
|»» birthday|null|true|none|生日|生日|
|»» email|string|true|none|邮箱|邮箱|
|»» gender|string|true|none|性别|none|
|»» avatar|string|true|none|头像url|头像|
|»» inviteCode|string|true|none|我的邀请码|none|
|»» othersInviteCode|string|true|none|被邀请的邀请码|none|
|»» status|integer|true|none|状态，1->正常，2->禁用|none|
|»» loginDate|string|true|none|最近登录时间|none|
|»» orgId|integer|true|none|我的组织id|店铺拥有者才有值|
|»» storeList|[string]|true|none|我关联的店铺|none|
|»» orgInfo|object|true|none|组织信息（owenr才返回）|组织信息（owenr才返回）|
|»»» id|integer|true|none||none|
|»»» createTime|string|true|none||none|
|»»» storeCount|integer|true|none||店铺数量|
|»»» productCount|integer|true|none||产品数|
|»»» serviceCount|integer|true|none||服务数|
|»»» cardCount|integer|true|none||卡数|
|»»» staffCount|integer|true|none||员工数|
|»»» adminId|integer|true|none||owner|
|»»» integration|integer|true|none||可用积分|
|»»» historyIntegration|integer|true|none||累计积分|
|»»» expiresTime|string|true|none||none|
|»» isExpires|integer|true|none|是否过期|0未过期，1已过期|
|»» lastStoreId|integer|true|none|最近登录门店id|none|
|»» lastStoreName|string|true|none|最近登录门店id|none|
|»» lastStore|null|true|none||none|
|»» renewPrice|integer|true|none|续费单价|none|
|»» productSkip|integer|true|none|新手指引-产品|// 0未添加 1已添加 2稍后添加|
|»» serviceSkip|integer|true|none|新手指引-服务|none|
|»» cardSkip|integer|true|none|新手指引-卡项|none|
|»» staffSkip|integer|true|none|新手指引-员工|none|

## POST 商家完善信息

POST /business/info

只有登录接口显示未注册时候才能调用

> Body 请求参数

```json
{
  "userName": "王健",
  "phone": [
    1,
    2
  ],
  "othersInviteCode": ""
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» userName|body|string| 是 | 用户名|none|
|» phone|body|string| 是 | 手机号|none|
|» othersInviteCode|body|string| 否 | 被邀请码|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbklkIjoiMWE1YzY4NjctYTZlNy00ZDZkLWJiNDAtMzUzMGQ2ZWFjYzJhIiwib3BlbmlkIjoiYXNhcyIsImJ1c2luZXNzSWQiOjUsInVzZXJUeXBlIjoiYnVzaW5lc3MifQ.YIrY5rSy-DP6BTebPAJnK764kmYC6f21Gnn8EL-er7iSb8VfE0PM9fKbLZZKQEFxryIM2lIc67vv0asLWIQTkw",
    "isRegister": 1
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» token|string|true|none||none|
|»» isRegister|integer|true|none||none|

## GET 新手指引稍后提交

GET /business/beginner/{type}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|type|path|string| 是 ||productSkip产品，serviceSkip服务，staffSkip员工|
|envVersion|header|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "businessId": 14,
    "createTime": "2024-10-13 16:01:32",
    "updateTime": null,
    "userName": "钟馗",
    "phone": "15192176273",
    "birthday": null,
    "email": "",
    "gender": "未知",
    "avatar": "",
    "inviteCode": "21014",
    "othersInviteCode": "",
    "status": 1,
    "loginDate": "2024-12-03 20:48:35",
    "orgId": 14,
    "storeList": [
      {
        "storeId": 3,
        "orgId": 14,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/58883566-6fc3-409e-a83a-c12b50135f19.jpg",
        "storeName": "钟馗的店",
        "phone": "15192176273",
        "address": "悦府",
        "desc": "钟馗家的店",
        "status": 1,
        "totalAmount": 3300,
        "platformAmount": 0,
        "createTime": "2024-10-13 16:03:46",
        "updateBy": 0,
        "updateTime": null,
        "isOwner": 1,
        "roleCode": 0,
        "roleDesc": null,
        "province": "370000",
        "city": "370100",
        "county": "370112",
        "locationX": "",
        "locationY": "",
        "bookingDuration": 15
      }
    ],
    "orgInfo": {
      "id": 14,
      "createTime": "2024-10-13 16:01:32",
      "storeCount": 1,
      "productCount": 1,
      "serviceCount": 4,
      "cardCount": 6,
      "staffCount": 1,
      "adminId": 14,
      "integration": 0,
      "historyIntegration": 0,
      "expiresTime": "2025-11-12 16:01:32"
    },
    "isExpires": 0,
    "lastStoreId": 0,
    "lastStoreName": "",
    "lastStore": {
      "storeId": 3,
      "orgId": 14,
      "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/58883566-6fc3-409e-a83a-c12b50135f19.jpg",
      "storeName": "钟馗的店",
      "phone": "15192176273",
      "address": "悦府",
      "desc": "钟馗家的店",
      "status": 1,
      "totalAmount": 3300,
      "platformAmount": 0,
      "createTime": "2024-10-13 16:03:46",
      "updateBy": 0,
      "updateTime": null,
      "isOwner": 1,
      "roleCode": 0,
      "roleDesc": null,
      "province": "370000",
      "city": "370100",
      "county": "370112",
      "locationX": "",
      "locationY": "",
      "bookingDuration": 15
    },
    "renewPrice": 60
  }
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» businessId|integer|true|none|商户id|登录人的唯一标识|
|»» createTime|string|true|none||创建时间|
|»» updateTime|null|true|none||none|
|»» userName|string|true|none|用户名|姓名|
|»» phone|string|true|none|手机号|手机号：为空标识未完善信息|
|»» birthday|null|true|none|生日|生日|
|»» email|string|true|none|邮箱|邮箱|
|»» gender|string|true|none|性别|none|
|»» avatar|string|true|none|头像url|头像|
|»» inviteCode|string|true|none|我的邀请码|none|
|»» othersInviteCode|string|true|none|被邀请的邀请码|none|
|»» status|integer|true|none|状态，1->正常，2->禁用|none|
|»» loginDate|string|true|none|最近登录时间|none|
|»» orgId|integer|true|none|我的组织id|店铺拥有者才有值|
|»» storeList|[object]|true|none|我关联的店铺|none|
|»»» storeId|integer|false|none|店铺id|none|
|»»» orgId|integer|false|none|所属组织|none|
|»»» logo|string|false|none|门店logo|none|
|»»» storeName|string|false|none|店铺名|none|
|»»» phone|string|false|none|联系电话|none|
|»»» address|string|false|none|地址|none|
|»»» desc|string|false|none|简介|none|
|»»» status|integer|false|none|门店状态，1->营业中，2->停业|none|
|»»» totalAmount|integer|false|none|累计收入|none|
|»»» platformAmount|integer|false|none|可提现余额|none|
|»»» createTime|string|false|none||none|
|»»» updateBy|integer|false|none||none|
|»»» updateTime|null|false|none||none|
|»»» isOwner|integer|false|none|是否店铺拥有者，1是，0否|none|
|»»» roleCode|integer|false|none||none|
|»»» roleDesc|null|false|none||none|
|»»» province|string|false|none|省|none|
|»»» city|string|false|none|市|none|
|»»» county|string|false|none|区|none|
|»»» locationX|string|false|none||none|
|»»» locationY|string|false|none||none|
|»»» bookingDuration|integer|false|none||none|
|»» orgInfo|object|true|none|组织信息（owenr才返回）|组织信息（owenr才返回）|
|»»» id|integer|true|none||none|
|»»» createTime|string|true|none||none|
|»»» storeCount|integer|true|none||店铺数量|
|»»» productCount|integer|true|none||产品数|
|»»» serviceCount|integer|true|none||服务数|
|»»» cardCount|integer|true|none||卡数|
|»»» staffCount|integer|true|none||员工数|
|»»» adminId|integer|true|none||owner|
|»»» integration|integer|true|none||可用积分|
|»»» historyIntegration|integer|true|none||累计积分|
|»»» expiresTime|string|true|none||none|
|»» isExpires|integer|true|none|是否过期|0未过期，1已过期|
|»» lastStoreId|integer|true|none|最近登录门店id|none|
|»» lastStoreName|string|true|none|最近登录门店id|none|
|»» lastStore|object|true|none|最近登录店信息|none|
|»»» storeId|integer|true|none||none|
|»»» orgId|integer|true|none||none|
|»»» logo|string|true|none||none|
|»»» storeName|string|true|none||none|
|»»» phone|string|true|none||none|
|»»» address|string|true|none||none|
|»»» desc|string|true|none||none|
|»»» status|integer|true|none||none|
|»»» totalAmount|integer|true|none||none|
|»»» platformAmount|integer|true|none||none|
|»»» createTime|string|true|none||none|
|»»» updateBy|integer|true|none||none|
|»»» updateTime|null|true|none||none|
|»»» isOwner|integer|true|none||none|
|»»» roleCode|integer|true|none||none|
|»»» roleDesc|null|true|none||none|
|»»» province|string|true|none||none|
|»»» city|string|true|none||none|
|»»» county|string|true|none||none|
|»»» locationX|string|true|none||none|
|»»» locationY|string|true|none||none|
|»»» bookingDuration|integer|true|none||none|
|»» renewPrice|integer|true|none|续费单价|none|

## GET 获取小程序二维码

GET /business/get-unlimited-qrcode

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|scene|query|string| 是 ||none|
|page|query|string| 是 ||例如 pages/index/index，根路径前不要填加 /，不能携带参数（参数请放在scene字段里）|
|Authorization|header|string| 是 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "businessId": 14,
    "createTime": "2024-10-13 16:01:32",
    "updateTime": null,
    "userName": "钟馗",
    "phone": "15192176273",
    "birthday": null,
    "email": "",
    "gender": "未知",
    "avatar": "",
    "inviteCode": "21014",
    "othersInviteCode": "",
    "status": 1,
    "loginDate": "2024-12-03 20:48:35",
    "orgId": 14,
    "storeList": [
      {
        "storeId": 3,
        "orgId": 14,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/58883566-6fc3-409e-a83a-c12b50135f19.jpg",
        "storeName": "钟馗的店",
        "phone": "15192176273",
        "address": "悦府",
        "desc": "钟馗家的店",
        "status": 1,
        "totalAmount": 3300,
        "platformAmount": 0,
        "createTime": "2024-10-13 16:03:46",
        "updateBy": 0,
        "updateTime": null,
        "isOwner": 1,
        "roleCode": 0,
        "roleDesc": null,
        "province": "370000",
        "city": "370100",
        "county": "370112",
        "locationX": "",
        "locationY": "",
        "bookingDuration": 15
      }
    ],
    "orgInfo": {
      "id": 14,
      "createTime": "2024-10-13 16:01:32",
      "storeCount": 1,
      "productCount": 1,
      "serviceCount": 4,
      "cardCount": 6,
      "staffCount": 1,
      "adminId": 14,
      "integration": 0,
      "historyIntegration": 0,
      "expiresTime": "2025-11-12 16:01:32"
    },
    "isExpires": 0,
    "lastStoreId": 0,
    "lastStoreName": "",
    "lastStore": {
      "storeId": 3,
      "orgId": 14,
      "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/58883566-6fc3-409e-a83a-c12b50135f19.jpg",
      "storeName": "钟馗的店",
      "phone": "15192176273",
      "address": "悦府",
      "desc": "钟馗家的店",
      "status": 1,
      "totalAmount": 3300,
      "platformAmount": 0,
      "createTime": "2024-10-13 16:03:46",
      "updateBy": 0,
      "updateTime": null,
      "isOwner": 1,
      "roleCode": 0,
      "roleDesc": null,
      "province": "370000",
      "city": "370100",
      "county": "370112",
      "locationX": "",
      "locationY": "",
      "bookingDuration": 15
    },
    "renewPrice": 60
  }
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» businessId|integer|true|none|商户id|登录人的唯一标识|
|»» createTime|string|true|none||创建时间|
|»» updateTime|null|true|none||none|
|»» userName|string|true|none|用户名|姓名|
|»» phone|string|true|none|手机号|手机号：为空标识未完善信息|
|»» birthday|null|true|none|生日|生日|
|»» email|string|true|none|邮箱|邮箱|
|»» gender|string|true|none|性别|none|
|»» avatar|string|true|none|头像url|头像|
|»» inviteCode|string|true|none|我的邀请码|none|
|»» othersInviteCode|string|true|none|被邀请的邀请码|none|
|»» status|integer|true|none|状态，1->正常，2->禁用|none|
|»» loginDate|string|true|none|最近登录时间|none|
|»» orgId|integer|true|none|我的组织id|店铺拥有者才有值|
|»» storeList|[object]|true|none|我关联的店铺|none|
|»»» storeId|integer|false|none|店铺id|none|
|»»» orgId|integer|false|none|所属组织|none|
|»»» logo|string|false|none|门店logo|none|
|»»» storeName|string|false|none|店铺名|none|
|»»» phone|string|false|none|联系电话|none|
|»»» address|string|false|none|地址|none|
|»»» desc|string|false|none|简介|none|
|»»» status|integer|false|none|门店状态，1->营业中，2->停业|none|
|»»» totalAmount|integer|false|none|累计收入|none|
|»»» platformAmount|integer|false|none|可提现余额|none|
|»»» createTime|string|false|none||none|
|»»» updateBy|integer|false|none||none|
|»»» updateTime|null|false|none||none|
|»»» isOwner|integer|false|none|是否店铺拥有者，1是，0否|none|
|»»» roleCode|integer|false|none||none|
|»»» roleDesc|null|false|none||none|
|»»» province|string|false|none|省|none|
|»»» city|string|false|none|市|none|
|»»» county|string|false|none|区|none|
|»»» locationX|string|false|none||none|
|»»» locationY|string|false|none||none|
|»»» bookingDuration|integer|false|none||none|
|»» orgInfo|object|true|none|组织信息（owenr才返回）|组织信息（owenr才返回）|
|»»» id|integer|true|none||none|
|»»» createTime|string|true|none||none|
|»»» storeCount|integer|true|none||店铺数量|
|»»» productCount|integer|true|none||产品数|
|»»» serviceCount|integer|true|none||服务数|
|»»» cardCount|integer|true|none||卡数|
|»»» staffCount|integer|true|none||员工数|
|»»» adminId|integer|true|none||owner|
|»»» integration|integer|true|none||可用积分|
|»»» historyIntegration|integer|true|none||累计积分|
|»»» expiresTime|string|true|none||none|
|»» isExpires|integer|true|none|是否过期|0未过期，1已过期|
|»» lastStoreId|integer|true|none|最近登录门店id|none|
|»» lastStoreName|string|true|none|最近登录门店id|none|
|»» lastStore|object|true|none|最近登录店信息|none|
|»»» storeId|integer|true|none||none|
|»»» orgId|integer|true|none||none|
|»»» logo|string|true|none||none|
|»»» storeName|string|true|none||none|
|»»» phone|string|true|none||none|
|»»» address|string|true|none||none|
|»»» desc|string|true|none||none|
|»»» status|integer|true|none||none|
|»»» totalAmount|integer|true|none||none|
|»»» platformAmount|integer|true|none||none|
|»»» createTime|string|true|none||none|
|»»» updateBy|integer|true|none||none|
|»»» updateTime|null|true|none||none|
|»»» isOwner|integer|true|none||none|
|»»» roleCode|integer|true|none||none|
|»»» roleDesc|null|true|none||none|
|»»» province|string|true|none||none|
|»»» city|string|true|none||none|
|»»» county|string|true|none||none|
|»»» locationX|string|true|none||none|
|»»» locationY|string|true|none||none|
|»»» bookingDuration|integer|true|none||none|
|»» renewPrice|integer|true|none|续费单价|none|

## GET 工作台数据

GET /business/workbench/{storeId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "currentMonthIncome": 1400,
    "currentDayIncome": 1100,
    "currentMonthDisburse": 7000,
    "currentMonthCardIncome": 0,
    "currentMonthUse": 0,
    "customerCount": 3,
    "vipCustomerCount": 1,
    "currentMonthBooking": 5,
    "waitCount": 7,
    "todayBookingList": [],
    "orgExpiresTime": "2025-01-04T08:13:43",
    "unreadNotice": 10
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» currentMonthIncome|integer|true|none|当月收入|none|
|»» currentDayIncome|integer|true|none|当天收入|none|
|»» currentMonthDisburse|integer|true|none|当月支出|none|
|»» currentMonthCardIncome|integer|true|none|当月卡充值|none|
|»» currentMonthUse|integer|true|none|本月消耗|none|
|»» customerCount|integer|true|none|客户数|none|
|»» vipCustomerCount|integer|true|none|vip客户数|none|
|»» currentMonthBooking|integer|true|none|本月预约量|none|
|»» waitCount|integer|true|none|待服务数量|none|
|»» todayBookingList|[string]|true|none|今日预约|none|
|»» orgExpiresTime|string|true|none|过期时间|none|
|»» unreadNotice|integer|true|none|未读消息数|none|

## POST 员工创建

POST /business/staff

> Body 请求参数

```json
{
  "storeId": 3,
  "avatar": "http://dummyimage.com/100x100",
  "userName": "范娟",
  "phone": "13590202726",
  "gender": 1,
  "jobCode": [
    1,
    2
  ],
  "roleCode": 1,
  "notes": "eiusmod aliquip fugiat sed",
  "scheduling": [
    {
      "weekCode": 1,
      "startTime": "10:00:00",
      "endTime": "18:00:00"
    },
    {
      "weekCode": 2,
      "startTime": "10:00:00",
      "endTime": "18:00:00"
    },
    {
      "weekCode": 3,
      "startTime": "10:00:00",
      "endTime": "18:00:00"
    }
  ],
  "serviceCategory": [
    1,
    2
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|integer| 是 ||none|
|» avatar|body|string| 是 | 头像|none|
|» userName|body|string| 是 | 姓名|none|
|» phone|body|string| 是 | 电话|none|
|» gender|body|integer| 否 | 性别|0未知，1男，2女|
|» jobCode|body|[integer]| 是 | 职务必填|none|
|» roleCode|body|integer| 否 | 角色|none|
|» notes|body|string| 否 | 备注|none|
|» scheduling|body|[object]| 否 ||none|
|»» weekCode|body|integer| 是 | 周几|1-7|
|»» startTime|body|string| 是 | 开始时间|08:00|
|»» endTime|body|string| 是 | 结束|21:00|
|» serviceCategory|body|[integer]| 否 | 服务分类id|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## PUT 员工修改

PUT /business/staff

> Body 请求参数

```json
{
  "storeStaffId": 13,
  "avatar": "http://dummyimage.com/100x100",
  "userName": "范娟",
  "phone": "13590202726",
  "gender": 1,
  "jobCode": [
    1,
    2,
    3
  ],
  "roleCode": 1,
  "notes": "eiusmod aliquip fugiat sed",
  "scheduling": [
    {
      "weekCode": 1,
      "startTime": "10:00:00",
      "endTime": "18:00:00"
    },
    {
      "weekCode": 2,
      "startTime": "10:00:00",
      "endTime": "18:00:00"
    },
    {
      "weekCode": 3,
      "startTime": "10:00:00",
      "endTime": "18:00:00"
    }
  ],
  "serviceCategory": [
    1,
    2
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeStaffId|body|integer| 是 | 员工在门店的id|none|
|» avatar|body|string| 是 | 头像|none|
|» userName|body|string| 是 | 姓名|none|
|» phone|body|string| 是 | 电话|none|
|» gender|body|integer| 否 | 性别|0未知，1男，2女|
|» jobCode|body|integer| 是 | 职务必填|none|
|» roleCode|body|integer| 否 | 角色|none|
|» notes|body|string| 否 | 备注|none|
|» scheduling|body|[object]| 是 ||none|
|»» weekCode|body|integer| 是 | 周几|1-7|
|»» startTime|body|string| 是 | 开始时间|08:00|
|»» endTime|body|string| 是 | 结束|21:00|
|» serviceCategory|body|[integer]| 是 | 服务分类id|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 员工列表

GET /business/staff

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||当前门店|
|userName|query|string| 否 ||名称|
|jobCode|query|integer| 否 ||职务,1店长，2手艺人，3销售|
|roleCode|query|integer| 否 ||角色，1店长，2销售，3手艺人|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

> 200 Response

```json
{
  "msg": "string",
  "code": 0,
  "data": {
    "total": 0,
    "list": [
      {
        "storeStaffId": 0,
        "avatar": "string",
        "userName": "string",
        "phone": "string",
        "gender": 0,
        "createBy": 0,
        "createTime": "string",
        "jobCode": 0,
        "jobDesc": "string",
        "roleCode": 0,
        "roleDesc": "string",
        "staffId": 0,
        "orgStaffId": 0
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» storeStaffId|integer|true|none|门店员工id|none|
|»»» avatar|string|true|none|头像|none|
|»»» userName|string|true|none|姓名|none|
|»»» phone|string|true|none|手机号|none|
|»»» gender|integer|true|none|性别|none|
|»»» createBy|integer|true|none||none|
|»»» createTime|string|true|none||none|
|»»» jobCode|integer|true|none|职务|none|
|»»» jobDesc|string|true|none|职务|none|
|»»» roleCode|integer|true|none|角色|none|
|»»» roleDesc|string|true|none|角色|none|
|»»» staffId|integer|true|none|登录人平台唯一id|none|
|»»» orgStaffId|integer|true|none|机构员工id|none|

## PUT 门店营业状态

PUT /business/store-status

> Body 请求参数

```json
{
  "storeId": "28",
  "status": 1
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|string| 是 | 门店id|none|
|» status|body|integer| 是 | 状态|1->营业中，2->停业|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## PUT 设置门店营业时间

PUT /business/store-work-time

> Body 请求参数

```json
{
  "storeId": "28",
  "start": "08:30:00",
  "end": "20:00:00",
  "week": [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|number| 是 ||none|
|» start|body|string| 是 ||none|
|» end|body|string| 是 ||none|
|» week|body|[number]| 是 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## PUT 设置门店上门时间

PUT /business/store-to-door-time

> Body 请求参数

```json
{
  "storeId": "28",
  "start": "08:30:00",
  "end": "20:00:00",
  "week": [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|number| 是 ||none|
|» start|body|string| 是 ||none|
|» end|body|string| 是 ||none|
|» week|body|[number]| 是 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 获取门店信息

GET /business/store/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "id": 28,
    "orgId": 4,
    "logo": "",
    "storeName": "5门店1",
    "phone": "18187475864",
    "address": "重庆吴忠市海淀区",
    "desc": "sint officia sunt",
    "status": 1,
    "statusDesc": "营业中",
    "totalAmount": 172360,
    "platformAmount": 156,
    "createTime": "2024-07-06 21:35:26",
    "updateTime": "2024-07-07 17:07:22",
    "province": "省",
    "city": "市",
    "county": "区",
    "locationX": "",
    "locationY": "",
    "workWeek": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "workStime": "08:30:00",
    "workEtime": "20:00:00",
    "toDoorWeek": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "toDoorStime": "08:30:00",
    "toDoorEtime": "20:00:00",
    "bookingDuration": 30
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none|主键id|none|
|»» orgId|integer|true|none|所属组织|none|
|»» logo|string|true|none|门店logo|none|
|»» storeName|string|true|none|门店名|none|
|»» phone|string|true|none|联系电话|none|
|»» address|string|true|none|地址|none|
|»» desc|string|true|none|简介|none|
|»» status|integer|true|none|状态|1营业中，2停业|
|»» statusDesc|string|true|none|状态中文描述|none|
|»» totalAmount|integer|true|none|累计收入|none|
|»» platformAmount|integer|true|none|可提现收入|none|
|»» createTime|string|true|none||none|
|»» updateTime|string|true|none|修改时间|none|
|»» province|string|true|none|省|none|
|»» city|string|true|none|市|none|
|»» county|string|true|none|区|none|
|»» locationX|string|true|none|经纬度|none|
|»» locationY|string|true|none|经纬度|none|
|»» workWeek|[integer]|true|none|营业时间|none|
|»» workStime|string|true|none||none|
|»» workEtime|string|true|none||none|
|»» toDoorWeek|[integer]|true|none|上门时间|none|
|»» toDoorStime|string|true|none||none|
|»» toDoorEtime|string|true|none||none|
|»» bookingDuration|integer|true|none|看板格子时长|分钟|

## GET 获取消息列表

GET /business/notice

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|pageSize|query|integer| 否 ||none|
|pageNum|query|integer| 否 ||none|
|status|query|integer| 否 ||null->全部，1->未读，2->已读|
|name|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 4,
    "list": [
      {
        "id": 171,
        "title": "会员到期提醒",
        "content": "尊敬的客户：\n\n您好！感谢您一直以来对我们平台的支持与信赖。\n\n我们温馨提醒您，您的小程序管理服务将在接下来的5天后到期，到期日期为2024-08-07T08:13:43。为了确保您能够继续享受我们平台提供的各项商家特权和服务，我们建议您尽快进行续费操作。\n\n会员服务优势：\n\n    私域客户管理：您可以轻松维护自己的私域客户，实现精准营销和客户关系管理。\n    高级功能解锁：作为会员，您将享有更多高级功能的使用权限，提升业务运营效率。\n    专属客服支持：我们的客服团队将为您提供更快速、更专业的服务，解决您在使用过程中的疑问和问题。\n    定期更新与升级：您将优先获得我们软件的最新功能和优化更新，保持竞争优势。\n\n如何续费：\n\n    登录小程序进入“我的”。\n    点击“续费”并按照提示完成操作。\n\n如有任何疑问或需要帮助，请随时联系我们的客服团队。联系方式如下：\n\n    电话：[15810746007]\n    邮箱：[123@163.com]\n\n我们期待与您继续携手合作，共创美好未来！\n\n祝您生意兴隆！\n\n勋华科技\n2024-11-29",
        "noticeType": 3,
        "ext": {
          "expiresTime": "",
          "platformPhone": "",
          "platformEmail": "",
          "today": ""
        },
        "status": 1,
        "createTime": "2024-11-22 07:55:22",
        "updateTime": null
      },
      {
        "id": 170,
        "title": "会员到期提醒",
        "content": "尊敬的客户：\n\n您好！感谢您一直以来对我们平台的支持与信赖。\n\n我们温馨提醒您，您的小程序管理服务将在接下来的5天后到期，到期日期为2024-08-07T08:13:43。为了确保您能够继续享受我们平台提供的各项商家特权和服务，我们建议您尽快进行续费操作。\n\n会员服务优势：\n\n    私域客户管理：您可以轻松维护自己的私域客户，实现精准营销和客户关系管理。\n    高级功能解锁：作为会员，您将享有更多高级功能的使用权限，提升业务运营效率。\n    专属客服支持：我们的客服团队将为您提供更快速、更专业的服务，解决您在使用过程中的疑问和问题。\n    定期更新与升级：您将优先获得我们软件的最新功能和优化更新，保持竞争优势。\n\n如何续费：\n\n    登录小程序进入“我的”。\n    点击“续费”并按照提示完成操作。\n\n如有任何疑问或需要帮助，请随时联系我们的客服团队。联系方式如下：\n\n    电话：[15810746007]\n    邮箱：[123@163.com]\n\n我们期待与您继续携手合作，共创美好未来！\n\n祝您生意兴隆！\n\n勋华科技\n2024-11-29",
        "noticeType": 3,
        "ext": {},
        "status": 1,
        "createTime": "2024-11-22 07:55:22",
        "updateTime": null
      },
      {
        "id": 4,
        "title": "服务2",
        "content": "",
        "noticeType": 2,
        "ext": {
          "artisanId": 6,
          "startTimeStr": "2024-11-08 10:13-11:13",
          "artisanName": "范娟",
          "storeServiceType": 1,
          "bookingId": 19,
          "storeServiceTypeDesc": "到店服务"
        },
        "status": 1,
        "createTime": "2024-11-21 08:31:41",
        "updateTime": null
      },
      {
        "id": 2,
        "title": "服务2",
        "content": "",
        "noticeType": 2,
        "ext": {
          "artisanId": 6,
          "startTimeStr": "2024-11-08 10:13-11:13",
          "artisanName": "范娟",
          "storeServiceType": 1,
          "bookingId": 17,
          "storeServiceTypeDesc": "到店服务"
        },
        "status": 1,
        "createTime": "2024-11-21 08:25:55",
        "updateTime": null
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» title|string|true|none||none|
|»»» content|string|true|none||none|
|»»» noticeType|integer|true|none||none|
|»»» ext|object|true|none||none|
|»»»» expiresTime|string|false|none||none|
|»»»» platformPhone|string|false|none||none|
|»»»» platformEmail|string|false|none||none|
|»»»» today|string|false|none||none|
|»»»» artisanId|integer|true|none||none|
|»»»» startTimeStr|string|true|none||none|
|»»»» artisanName|string|true|none||none|
|»»»» storeServiceType|integer|true|none||none|
|»»»» bookingId|integer|true|none||none|
|»»»» storeServiceTypeDesc|string|true|none||none|
|»»» status|integer|true|none||none|
|»»» createTime|string|true|none||none|
|»»» updateTime|null|true|none||none|

## PUT 单条消息标记已读

PUT /business/notice/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||消息id|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 全部消息标记已读 Copy

PUT /business/notice/all

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## DELETE 删除全部消息

DELETE /business/notice/all

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## POST 员工完善信息

POST /business/staff-info

只有登录接口显示未注册时候才能调用

> Body 请求参数

```json
{
  "userName": "姜军",
  "phone": "18653447753",
  "othersInviteCode": "13"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» userName|body|string| 是 | 用户名|none|
|» phone|body|string| 是 | 手机号|none|
|» othersInviteCode|body|string| 否 | 被邀请码|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbklkIjoiMWE1YzY4NjctYTZlNy00ZDZkLWJiNDAtMzUzMGQ2ZWFjYzJhIiwib3BlbmlkIjoiYXNhcyIsImJ1c2luZXNzSWQiOjUsInVzZXJUeXBlIjoiYnVzaW5lc3MifQ.YIrY5rSy-DP6BTebPAJnK764kmYC6f21Gnn8EL-er7iSb8VfE0PM9fKbLZZKQEFxryIM2lIc67vv0asLWIQTkw",
    "isRegister": 1
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» token|string|true|none||none|
|»» isRegister|integer|true|none||none|

## POST 创建服务

POST /business/service

> Body 请求参数

```json
"{\r\n    \"storeId\": {{storeId}},\r\n    \"name\": \"服务3\",\r\n    \"categoryId\": 5,\r\n    \"duration\": 60,\r\n    \"durationUnit\": \"minute\",\r\n    \"imgs\": [\r\n        \"http://dummyimage.com/400x400\"\r\n    ],\r\n    \"price\": 23,\r\n    \"price2\": 4,\r\n    \"desc\": \"eiusmod enim\",\r\n    \"isShow\": 1,\r\n    \"payType\": 1,\r\n    \"serviceColor\":\"#555555\",\r\n    \"isToStore\":1,\r\n    \"isToDoor\":1,\r\n    \"serverToType\":[]\r\n}"
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|number| 是 | 当前门店|none|
|» name|body|string| 是 | 服务名|none|
|» categoryId|body|number| 是 | 分类id|none|
|» duration|body|number| 是 | 服务时长|none|
|» durationUnit|body|string| 是 | 时长单位|暂时只支持minute分钟|
|» imgs|body|[string]| 是 | 图片地址|none|
|» price|body|number| 是 | 原价|60.00|
|» price2|body|number| 否 | 优惠价|none|
|» desc|body|string| 否 | 描述|none|
|» isShow|body|number| 是 | 是否网店销售|0否，1是|
|» payType|body|number| 是 | 预约支付类型|1全款，2到店付|
|» serviceColor|body|string| 是 | 服务标记色|none|
|» isToStore|body|integer| 否 | 是否支持到店|1支持，0不支持|
|» isToDoor|body|integer| 否 | 是否支持上门|1支持，0不支持|
|» serverToType|body|[number]| 是 | 服务类型|1上门，2到店，多选|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 修改服务

PUT /business/service

> Body 请求参数

```json
{
  "id": 1,
  "storeId": 1,
  "name": "服务122221",
  "categoryId": 1,
  "duration": 60,
  "durationUnit": "minute",
  "imgs": [
    "http://dummyimage.com/400x400"
  ],
  "price": 23,
  "price2": 4,
  "desc": "eiusmod enim",
  "isShow": 1,
  "payType": 1,
  "serviceColor": "#000000",
  "isToStore": 1,
  "isToDoor": 1,
  "serverToType": []
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|integer| 是 | 主键|ID 编号|
|» storeId|body|integer| 是 | 所属门店|none|
|» name|body|string| 是 | 服务名|none|
|» categoryId|body|integer| 是 | 分类id|none|
|» duration|body|integer| 是 | 服务时长|none|
|» durationUnit|body|string| 是 | 时长单位|暂时只支持minute分钟|
|» imgs|body|[string]| 是 | 图片地址|none|
|» price|body|integer| 是 | 原价|none|
|» price2|body|integer| 是 | 优惠价|none|
|» desc|body|string| 是 | 描述|none|
|» isShow|body|integer| 是 | 是否网店销售|0否，1是|
|» payType|body|integer| 是 | 预约支付类型|1全款，2到店|
|» serviceColor|body|string| 是 | 服务标记色|none|
|» isToStore|body|integer| 否 | 是否支持到店|1支持，0不支持|
|» isToDoor|body|integer| 否 | 是否支持上门|1支持，0不支持|
|» serverToType|body|[number]| 是 | 服务类型|1上门，2到店，多选|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 查询服务分页列表

GET /business/service

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||当前门店id|
|pageSize|query|integer| 否 ||每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|name|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 1,
    "list": [
      {
        "id": 1,
        "storeId": 27,
        "name": "服务1",
        "categoryId": 1,
        "duration": 60,
        "durationUnit": "minute",
        "coverImg": "http://dummyimage.com/400x400",
        "price": 23,
        "price2": 4,
        "desc": "eiusmod enim",
        "isShow": 1,
        "payType": 1,
        "serviceColor": "#666666",
        "isToStore": 0,
        "isToDoor": 0,
        "categoryName": "服务分类1"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|false|none|服务主键id|none|
|»»» storeId|integer|false|none|所属门店|none|
|»»» name|string|false|none|服务名|none|
|»»» categoryId|integer|false|none|分类id|none|
|»»» duration|integer|false|none|时长|none|
|»»» durationUnit|string|false|none|服务时长单位分钟minute|暂时固定分钟minute|
|»»» coverImg|string|false|none|封面图|none|
|»»» price|integer|false|none|原价|none|
|»»» price2|integer|false|none|优惠价|none|
|»»» desc|string|false|none|简介|none|
|»»» isShow|integer|false|none|是否在线销售|none|
|»»» payType|integer|false|none|预约支付|1付全款，2到店|
|»»» serviceColor|string|false|none|颜色|none|
|»»» isToStore|integer|false|none|是否支持到店|none|
|»»» isToDoor|integer|false|none|是否支持上门|none|
|»»» categoryName|string|false|none|分类名|none|

## POST 创建产品

POST /business/product

> Body 请求参数

```json
"{\r\n    \"storeId\": {{storeId}},\r\n    \"name\": \"产品4\",\r\n    \"categoryId\": 4,\r\n    \"unit\": \"套\",\r\n    \"inventory\":100,\r\n    \"imgs\": [\r\n        \"http://dummyimage.com/400x400\"\r\n    ],\r\n    \"price\": 11,\r\n    \"price2\": 32,\r\n    \"desc\": \"proident cillum consequat dolor\",\r\n    \"isShow\": 1\r\n}"
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|integer| 是 | 当前门店|none|
|» name|body|string| 是 | 服务名|none|
|» categoryId|body|integer| 是 | 分类id|none|
|» unit|body|string| 是 | 单位|none|
|» inventory|body|integer| 是 | 库存|none|
|» imgs|body|[string]| 是 | 图片地址|none|
|» price|body|number| 是 | 原价|60.00|
|» price2|body|number| 否 | 优惠价|none|
|» desc|body|string| 否 | 描述|none|
|» isShow|body|integer| 是 | 是否网店销售|0否，1是|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 修改产品

PUT /business/product

> Body 请求参数

```json
{
  "id": 2,
  "storeId": 27,
  "name": "产品1",
  "categoryId": 1,
  "unit": "套",
  "imgs": [
    "http://dummyimage.com/400x400"
  ],
  "price": 11,
  "price2": 32,
  "desc": "proident cillum consequat dolor",
  "isShow": 27
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|integer| 是 | 主键|ID 编号|
|» storeId|body|integer| 是 | 当前门店|none|
|» name|body|string| 是 | 服务名|none|
|» categoryId|body|integer| 是 | 分类id|none|
|» unit|body|string| 是 | 单位|none|
|» imgs|body|[string]| 是 | 图片地址|none|
|» price|body|number| 是 | 原价|60.00|
|» price2|body|number| 否 | 优惠价|none|
|» desc|body|string| 否 | 描述|none|
|» isShow|body|integer| 是 | 是否网店销售|0否，1是|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 查询产品分页列表

GET /business/product

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||当前门店id，当前门店id|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|name|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 1,
    "list": [
      {
        "id": 1,
        "name": "产品1",
        "categoryId": 1,
        "unit": "套",
        "inventory": 100,
        "coverImg": "http://dummyimage.com/400x400",
        "price": 11,
        "price2": 32,
        "desc": "proident cillum consequat dolor",
        "isShow": 1,
        "storeId": 27,
        "categoryName": "产品分类1"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|false|none|主键id|none|
|»»» name|string|false|none|产品名|none|
|»»» categoryId|integer|false|none|分类id|none|
|»»» unit|string|false|none|单位|none|
|»»» inventory|integer|false|none|库存|none|
|»»» coverImg|string|false|none|封面图|none|
|»»» price|integer|false|none|原价|none|
|»»» price2|integer|false|none|优惠价|none|
|»»» desc|string|false|none|简介|none|
|»»» isShow|integer|false|none|是否网上售卖|none|
|»»» storeId|integer|false|none|门店id|none|
|»»» categoryName|string|false|none|分类名|none|

## POST 创建卡项

POST /business/card

> Body 请求参数

```json
"{\r\n    \"storeId\": {{storeId}},\r\n    \"type\": 3,\r\n    \"secondType\": 0,\r\n    \"gift\":0,\r\n    \"name\": \"折扣卡8折\",\r\n    \"categoryId\": 4,\r\n    \"price\": 200,\r\n    \"info\": [\r\n        {\"productId\":4,\"equity\":8},\r\n        {\"serviceId\":4,\"equity\":8}\r\n    ],\r\n    \"expires\": 30,\r\n    \"isShow\": 1,\r\n    \"desc\": \"卡\",\r\n    \"countLimit\":0\r\n}"
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|integer| 是 | 当前门店|none|
|» type|body|integer| 是 | 分类|1->次卡，2->充值卡，3->折扣卡|
|» secondType|body|integer| 是 | 次卡类型|0非次卡，1->有限次卡，2->不限次卡，3->通卡|
|» name|body|string| 是 | 卡名|none|
|» categoryId|body|integer| 是 | 分类|none|
|» price|body|integer| 是 | 原价售价|充值卡的充值金额|
|» info|body|[object]| 是 ||none|
|»» productId|body|integer| 是 ||产品id，与服务id只能存在一个有值的|
|»» serviceId|body|integer| 是 ||服务id|
|»» equity|body|integer| 是 ||次卡表示数量，折扣充值卡表示折扣1-10|
|» expires|body|integer| 是 | 有效期天数|0长期有效|
|» isShow|body|integer| 是 | 是否网店销售|0否，1是|
|» desc|body|string| 是 | 描述|none|
|» gift|body|number| 否 | 充值卡赠送|保留两位小数|
|» countLimit|body|number| 否 | 不限次卡，次数上限|共用次数|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 修改卡项

PUT /business/card

> Body 请求参数

```json
{
  "id": 38,
  "type": 1,
  "secondType": 1,
  "gift": 0,
  "name": "500元10次卡",
  "categoryId": 20,
  "price": 500,
  "expires": 365,
  "isShow": 0,
  "desc": "<p>500元的十次卡，不打折</p>",
  "info": [
    {
      "serviceId": 5,
      "productId": 0,
      "equity": 10
    }
  ],
  "countLimit": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|integer| 是 ||ID 编号|
|» storeId|body|integer| 是 | 当前门店|none|
|» type|body|integer| 是 | 分类|1->次卡，2->充值卡，3->折扣卡|
|» secondType|body|integer| 是 | 次卡类型|0非次卡，1->有限次卡，2->不限次卡，3->通卡|
|» name|body|string| 是 | 卡名|none|
|» categoryId|body|integer| 是 | 分类|none|
|» price|body|integer| 是 ||none|
|» info|body|[object]| 是 ||none|
|»» productId|body|integer| 否 ||产品id，与服务id只能存在一个有值的|
|»» serviceId|body|integer| 是 ||服务id|
|»» equity|body|integer| 是 ||次卡表示数量，折扣充值卡表示折扣1-10|
|» expires|body|integer| 是 | 有效期天数|0长期有效|
|» isShow|body|integer| 是 | 是否网店销售|0否，1是|
|» desc|body|string| 是 | 描述|none|
|» gift|body|integer| 否 | 充值卡赠送|保留两位小数|
|» countLimit|body|number| 否 | 不限次卡，次数上限|共用次数|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 查询卡项分页列表

GET /business/card

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||当前门店必填|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|name|query|string| 否 ||名称模糊查询|
|categoryId|query|integer| 否 ||分类id|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 5,
    "list": [
      {
        "id": 3,
        "type": 1,
        "secondType": 1,
        "gift": 0,
        "name": "次卡有限次卡",
        "categoryId": 3,
        "price": 1000,
        "expires": 30,
        "countLimit": 0,
        "isShow": 1,
        "info": [
          {
            "cardId": 3,
            "serviceId": 4,
            "serviceName": "服务1",
            "productId": 0,
            "productName": "",
            "equity": 10,
            "price": 200,
            "price2": 20
          },
          {
            "cardId": 3,
            "serviceId": 0,
            "serviceName": "",
            "productId": 4,
            "productName": "产品2",
            "equity": 10,
            "price": 150,
            "price2": 100
          }
        ],
        "totalCount": 20,
        "discount": 0
      },
      {
        "id": 4,
        "type": 1,
        "secondType": 2,
        "gift": 0,
        "name": "次卡无限次卡",
        "categoryId": 3,
        "price": 1000,
        "expires": 30,
        "countLimit": 0,
        "isShow": 1,
        "info": [
          {
            "cardId": 4,
            "serviceId": 4,
            "serviceName": "服务1",
            "productId": 0,
            "productName": "",
            "equity": 10,
            "price": 200,
            "price2": 20
          },
          {
            "cardId": 4,
            "serviceId": 0,
            "serviceName": "",
            "productId": 4,
            "productName": "产品2",
            "equity": 10,
            "price": 150,
            "price2": 100
          }
        ],
        "totalCount": 20,
        "discount": 0
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none|主键|none|
|»»» type|integer|true|none|类型|1->次卡，2->充值卡，3->折扣卡|
|»»» secondType|integer|true|none|次卡类型|0非次卡，1->有限次卡，2->不限次卡，3->通卡|
|»»» gift|integer|true|none|充值卡赠送金额|none|
|»»» name|string|true|none|卡名称|none|
|»»» categoryId|integer|true|none||none|
|»»» price|integer|true|none|价格|none|
|»»» expires|integer|true|none|有效期|none|
|»»» countLimit|integer|true|none|不限次卡，次数上限|none|
|»»» isShow|integer|true|none||none|
|»»» info|[object]|true|none||none|
|»»»» cardId|integer|true|none||none|
|»»»» serviceId|integer|true|none|服务id|none|
|»»»» serviceName|string|true|none|服务名|none|
|»»»» productId|integer|true|none|产品id|none|
|»»»» productName|string|true|none|产品名|none|
|»»»» equity|integer|true|none|权益|次卡表示次数，充值卡折扣卡表示折扣0.1-10.0|

## GET 查询卡项信息

GET /business/card/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "id": 7,
    "orgId": 4,
    "createBy": 5,
    "createTime": "2024-07-28 08:36:53",
    "updateBy": 0,
    "updateTime": null,
    "type": 2,
    "typeDesc": "充值卡",
    "secondType": 0,
    "secondTypeDesc": "",
    "gift": 0,
    "name": "折扣卡8折",
    "categoryId": 4,
    "categoryName": "ka分类1",
    "price": 200,
    "expires": 30,
    "isShow": 1,
    "desc": "卡",
    "deleteStatus": 1,
    "info": [
      {
        "cardId": 7,
        "serviceId": 4,
        "serviceName": "服务1",
        "productId": 0,
        "productName": "",
        "equity": 80,
        "price": 200,
        "price2": 20
      },
      {
        "cardId": 7,
        "serviceId": 0,
        "serviceName": "",
        "productId": 4,
        "productName": "产品2",
        "equity": 80,
        "price": 150,
        "price2": 100
      }
    ],
    "storeId": 28,
    "countLimit": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none|主键|none|
|»» orgId|integer|true|none||none|
|»» createBy|integer|true|none|创建人|none|
|»» createTime|string|true|none||none|
|»» updateBy|integer|true|none||none|
|»» updateTime|null|true|none||none|
|»» type|integer|true|none|类型|1->次卡，2->充值卡，3->折扣卡|
|»» typeDesc|string|true|none||none|
|»» secondType|integer|true|none|次卡分类|0非次卡，1->有限次卡，2->不限次卡，3->通卡|
|»» secondTypeDesc|string|true|none||none|
|»» gift|integer|true|none|充值卡赠送|none|
|»» name|string|true|none|卡名称|none|
|»» categoryId|integer|true|none|分类id|none|
|»» categoryName|string|true|none|分类名|这一项如果用不到可以跟我说|
|»» price|integer|true|none|售价|none|
|»» expires|integer|true|none|有效期天数|0不限|
|»» isShow|integer|true|none|是否网店售卖|none|
|»» desc|string|true|none|描述|none|
|»» deleteStatus|integer|true|none||1未删除，2已删除|
|»» info|[object]|true|none|关联权益|none|
|»»» cardId|integer|true|none||none|
|»»» serviceId|integer|true|none|服务id|服务和产品每条只存在一个|
|»»» serviceName|string|true|none|服务名|none|
|»»» productId|integer|true|none|产品id|none|
|»»» productName|string|true|none|产品名|none|
|»»» equity|integer|true|none|权益值|次卡表示次数，充值卡折扣卡表示折扣1-100|
|»»» price|integer|true|none||none|
|»»» price2|integer|true|none||none|
|»» storeId|integer|true|none||none|
|»» countLimit|integer|true|none|不限次卡，次数上限|none|

## DELETE 删除卡项

DELETE /business/card/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 查询单条产品详情

GET /business/product/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "id": 1,
    "orgId": 2,
    "createBy": 2,
    "createTime": "2024-06-20 08:27:19",
    "updateBy": 0,
    "updateTime": null,
    "name": "产品1",
    "categoryId": 1,
    "unit": "套",
    "inventory": 100,
    "coverImg": "http://dummyimage.com/400x400",
    "imgs": [
      "http://dummyimage.com/400x400"
    ],
    "price": 11,
    "price2": 32,
    "desc": "proident cillum consequat dolor",
    "isShow": 27,
    "deleteStatus": 1,
    "storeId": 0,
    "categoryName": "分类1"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||none|
|»» orgId|integer|true|none||none|
|»» createBy|integer|true|none||none|
|»» createTime|string|true|none||none|
|»» updateBy|integer|true|none||none|
|»» updateTime|null|true|none||none|
|»» name|string|true|none||none|
|»» categoryId|integer|true|none||none|
|»» unit|string|true|none||none|
|»» inventory|integer|true|none||none|
|»» coverImg|string|true|none||none|
|»» imgs|[string]|true|none||none|
|»» price|integer|true|none|原价|none|
|»» price2|integer|true|none|优惠价|none|
|»» desc|string|true|none||none|
|»» isShow|integer|true|none||none|
|»» deleteStatus|integer|true|none||none|
|»» storeId|integer|true|none||none|
|»» categoryName|string|true|none||none|

## DELETE 删除产品

DELETE /business/product/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 查询单条服务

GET /business/service/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|number| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "id": 6,
    "orgId": 4,
    "storeId": 28,
    "name": "服务3",
    "categoryId": 5,
    "duration": 60,
    "durationUnit": "minute",
    "coverImg": "http://dummyimage.com/400x400",
    "imgs": [
      "http://dummyimage.com/400x400"
    ],
    "price": 23,
    "price2": 20,
    "desc": "eiusmod enim",
    "isShow": 1,
    "payType": 1,
    "serviceColor": "#555555",
    "isToStore": 1,
    "isToDoor": 1,
    "createBy": 5,
    "createTime": "2024-07-25 08:23:49",
    "updateBy": 0,
    "updateTime": null,
    "categoryName": "服务分类3",
    "serverToType": [
      1,
      2
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none|服务主键id|none|
|»» orgId|integer|true|none|所属组织|none|
|»» storeId|integer|true|none|门店id|none|
|»» name|string|true|none|服务名|none|
|»» categoryId|integer|true|none|服务分类|none|
|»» duration|integer|true|none|服务时长|none|
|»» durationUnit|string|true|none|服务时长单位分钟minute|none|
|»» coverImg|string|true|none|封面图|none|
|»» imgs|[string]|true|none||none|
|»» price|integer|true|none|原价|none|
|»» price2|integer|true|none|优惠价|none|
|»» desc|string|true|none|简介|none|
|»» isShow|integer|true|none|是否网店展示|none|
|»» payType|integer|true|none|预约支付|1付全款，2到付|
|»» serviceColor|string|true|none|颜色|none|
|»» isToStore|integer|true|none|是否支持到店|none|
|»» isToDoor|integer|true|none|是否支持上门|none|
|»» createBy|integer|true|none|创建人|none|
|»» createTime|string|true|none|创建时间|none|
|»» updateBy|integer|true|none|修改人|none|
|»» updateTime|null|true|none|修改时间|none|
|»» categoryName|string|true|none|分类名|none|

## DELETE 服务删除

DELETE /business/service/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## POST 创建服务分类

POST /business/service/category

> Body 请求参数

```json
"{\r\n    \"name\": \"服务分类3\",\r\n    \"storeId\": {{storeId}}\r\n}"
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» name|body|string| 是 | 分类名称|none|
|» storeId|body|integer| 是 | 当前门店|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 修改服务分类

PUT /business/service/category

> Body 请求参数

```json
{
  "id": 1,
  "name": "服务分类1",
  "storeId": 27
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|string| 是 | 要求改的分类id|ID 编号|
|» name|body|string| 是 | 分类名称|none|
|» storeId|body|integer| 是 | 当前门店|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 获取服务分类列表

GET /business/service/category

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "id": 1,
      "storeId": 27,
      "name": "服务分类1"
    },
    {
      "id": 2,
      "storeId": 27,
      "name": "服务分类1"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none|分类id|none|
|»» storeId|integer|true|none|门店id|none|
|»» name|string|true|none|分类名|none|

## POST 创建产品分类

POST /business/product/category

> Body 请求参数

```json
"{\r\n    \"name\": \"产品分类2\",\r\n    \"storeId\": {{storeId}}\r\n}"
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» name|body|string| 是 | 分类名称|none|
|» storeId|body|integer| 是 | 当前门店|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 修改产品分类

PUT /business/product/category

> Body 请求参数

```json
{
  "id": 1,
  "name": "产品分类1",
  "storeId": 27
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|string| 是 | 要求改的分类id|ID 编号|
|» name|body|string| 是 | 分类名称|none|
|» storeId|body|integer| 是 | 当前门店|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 获取卡项分类列表

GET /business/product/category

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "id": 1,
      "storeId": 27,
      "name": "产品分类1"
    },
    {
      "id": 2,
      "storeId": 27,
      "name": "产品分类1"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none|分类id|none|
|»» storeId|integer|true|none|门店id|none|
|»» name|string|true|none|分类名|none|

## POST 创建卡项分类

POST /business/card/category

> Body 请求参数

```json
"{\r\n    \"name\": \"ka分类1\",\r\n    \"storeId\": {{storeId}}\r\n}"
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» name|body|string| 是 | 分类名称|none|
|» storeId|body|integer| 是 | 当前门店|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 修改卡项分类

PUT /business/card/category

> Body 请求参数

```json
{
  "id": 1,
  "name": "ka分类111",
  "storeId": 27
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|string| 是 | 要求改的分类id|ID 编号|
|» name|body|string| 是 | 分类名称|none|
|» storeId|body|integer| 是 | 当前门店|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 上报当前门店id

PUT /business/current-store-id

> Body 请求参数

```json
{
  "storeId": 28
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|integer| 是 | 当前门店id|当前门店id|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 服务推荐

POST /business/service/recommend

> Body 请求参数

```json
{
  "serviceId": 1,
  "position": 1
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» serviceId|body|integer| 是 | 服务id|none|
|» position|body|integer| 否 | 推荐位置|1首页，不填默认首页|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## DELETE 服务取消推荐

DELETE /business/service/recommend

> Body 请求参数

```json
{
  "serviceId": 1,
  "position": 1
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» serviceId|body|integer| 是 | 服务id|none|
|» position|body|integer| 否 | 推荐位置|1首页，不填默认首页|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## DELETE 服务分类删除

DELETE /business/service/category/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## DELETE 删除产品分类

DELETE /business/product/category/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## DELETE 删除卡项分类

DELETE /business/card/category/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## DELETE 删除员工

DELETE /business/staff/{storeStaffId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeStaffId|path|string| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 员工详情

GET /business/staff/{storeStaffId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeStaffId|path|integer| 是 ||门店员工id|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "avatar": "http://dummyimage.com/100x100",
    "userName": "范娟",
    "phone": "13590202726",
    "gender": "男",
    "storeStaffId": 13,
    "storeId": 28,
    "jobCode": 1,
    "jobDesc": "店长",
    "roleCode": 1,
    "roleDesc": "店长",
    "staffId": 5,
    "notes": "eiusmod aliquip fugiat sed",
    "createTime": "2024-07-03 07:57:32",
    "scheduling": [
      {
        "weekCode": 4,
        "startTime": "09:00:00",
        "endTime": "21:00:00"
      },
      {
        "weekCode": 5,
        "startTime": "09:00:00",
        "endTime": "21:00:00"
      },
      {
        "weekCode": 6,
        "startTime": "09:00:00",
        "endTime": "21:00:00"
      },
      {
        "weekCode": 7,
        "startTime": "09:00:00",
        "endTime": "21:00:00"
      }
    ],
    "serviceCategory": [
      {
        "serviceCategoryId": 5,
        "serviceCategoryName": "服务分类3"
      },
      {
        "serviceCategoryId": 6,
        "serviceCategoryName": null
      }
    ],
    "performance": 5600,
    "bookingCount": 4,
    "customerCount": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» avatar|string|true|none|头像|none|
|»» userName|string|true|none|姓名|none|
|»» phone|string|true|none|手机号|none|
|»» gender|string|true|none|性别|none|
|»» storeStaffId|integer|true|none|门店员工id|none|
|»» storeId|integer|true|none||none|
|»» jobCode|integer|true|none|职务|none|
|»» jobDesc|string|true|none|职务|none|
|»» roleCode|integer|true|none|角色|none|
|»» roleDesc|string|true|none|角色|none|
|»» staffId|integer|true|none||none|
|»» notes|string|true|none|备注|none|
|»» createTime|string|true|none||none|
|»» scheduling|[object]|true|none|工作时间|none|
|»»» weekCode|integer|true|none||none|
|»»» startTime|string|true|none||none|
|»»» endTime|string|true|none||none|
|»» serviceCategory|[object]|true|none|服务分类|none|
|»»» serviceCategoryId|integer|true|none||none|
|»»» serviceCategoryName|string¦null|true|none||none|
|»» performance|integer|true|none|业绩|none|
|»» bookingCount|integer|true|none|预约数量|none|
|»» customerCount|integer|true|none|客户数|none|

## DELETE 删除一条消息

DELETE /business/notice/{noticeId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|noticeId|path|string| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 获取门店配置：职务角色

GET /business/staff-conf

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|string| 是 ||当前门店|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "jobList": [
      {
        "code": 1,
        "desc": "店长"
      },
      {
        "code": 2,
        "desc": "手艺人"
      },
      {
        "code": 3,
        "desc": "营销顾问"
      }
    ],
    "roleList": [
      {
        "code": 1,
        "desc": "店长"
      },
      {
        "code": 2,
        "desc": "销售"
      },
      {
        "code": 3,
        "desc": "手艺人"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» jobList|[object]|true|none||none|
|»»» code|integer|true|none||none|
|»»» desc|string|true|none||none|
|»» roleList|[object]|true|none||none|
|»»» code|integer|true|none||none|
|»»» desc|string|true|none||none|

## PUT 单独修改员工工作时间

PUT /business/staff/scheduling

> Body 请求参数

```json
{
  "storeStaffId": 13,
  "scheduling": [
    {
      "weekCode": 1,
      "startTime": "10:00:00",
      "endTime": "17:00:00"
    },
    {
      "weekCode": 2,
      "startTime": "10:00:00",
      "endTime": "18:00:00"
    },
    {
      "weekCode": 3,
      "startTime": "10:00:00",
      "endTime": "18:00:00"
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 添加客户

POST /business/store-customer

> Body 请求参数

```json
{
  "storeId": 28,
  "name": "小明",
  "phone": "18685470352",
  "noteName": "张晓明",
  "source": 1,
  "artisanId": 5,
  "adviserId": 5,
  "level": 1,
  "gender": 1,
  "birthday": "1972-10-19",
  "wechatCode": "4",
  "province": "宁夏回族自治区",
  "city": "白城市",
  "county": "veniam culpa ullamco",
  "address": "江西省聊城市河东区",
  "notes": "magna incididunt ea et est"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|integer| 是 | 当前门店id|当前门店id|
|» name|body|string| 是 | 姓名|名称|
|» phone|body|string| 是 | 手机号|none|
|» noteName|body|string| 否 | 备注名|none|
|» source|body|integer| 否 | 来源|ON_LINE(1,"线上"),     OFFLINE(2,"线下"),     INTRODUCE(3,"转介绍"),     WALK_IN(4,"walk-in"),     OTHER(5,"其他"),;|
|» artisanId|body|integer| 否 | 手艺人|员工列表storeStaffId|
|» adviserId|body|integer| 否 | 顾问|员工列表storeStaffId|
|» level|body|integer| 否 | 会员等级|1->普通客户，2->vip客户|
|» gender|body|integer| 是 | 性别|0->未知；1->男；2->女|
|» birthday|body|string| 否 | 生日|none|
|» wechatCode|body|string| 否 | 微信|none|
|» province|body|string| 否 | 省|none|
|» city|body|string| 否 | 市|none|
|» county|body|string| 否 | 区|none|
|» address|body|string| 否 | 详细地址|none|
|» notes|body|string| 否 | 备注|none|
|» avatar|body|string| 否 | 头像|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 修改客户

PUT /business/store-customer

> Body 请求参数

```json
{
  "id": 2,
  "storeId": 27,
  "name": "小明1",
  "phone": "18685470351",
  "noteName": "张晓明",
  "source": 1,
  "artisanId": 5,
  "adviserId": 5,
  "level": 1,
  "gender": 1,
  "birthday": "1972-10-19",
  "wechatCode": "4",
  "province": "宁夏回族自治区",
  "city": "白城市",
  "county": "veniam culpa ullamco",
  "address": "江西省聊城市河东区",
  "notes": "magna incididunt ea et est"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|integer| 是 | 当前门店id|当前门店id|
|» name|body|string| 是 | 姓名|名称|
|» phone|body|string| 是 | 手机号|none|
|» noteName|body|string| 否 | 备注名|none|
|» source|body|integer| 否 | 来源|none|
|» artisanId|body|integer| 否 | 手艺人|none|
|» adviserId|body|integer| 否 | 顾问|none|
|» level|body|integer| 否 | 会员等级|none|
|» gender|body|integer| 是 | 性别|0->未知；1->男；2->女|
|» birthday|body|string| 否 | 生日|none|
|» wechatCode|body|string| 否 | 微信|none|
|» province|body|string| 否 | 省|none|
|» city|body|string| 否 | 市|none|
|» county|body|string| 否 | 区|none|
|» address|body|string| 否 | 详细地址|none|
|» notes|body|string| 否 | 备注|none|
|» avatar|body|string| 否 | 头像|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 客户列表

GET /business/store-customer

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||当前门店id，当前门店id|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|keyword|query|string| 否 ||姓名手机号模糊查询|
|phone|query|string| 否 ||手机号精确查询|
|birthdayS|query|string| 否 ||生日开始日期|
|birthdayE|query|string| 否 ||生日结束日期|
|cDateS|query|string| 否 ||成为客户开始|
|cDateE|query|string| 否 ||成为客户结束|
|cardAll|query|integer| 否 ||=1 任意卡项；指定卡id或者卡类型是传值0|
|cardIds|query|string| 否 ||指定卡，id逗号分隔（指定卡项时，卡id）|
|cardCIds|query|string| 否 ||知道卡类型，id逗号分隔（指定类型时，类型id）|
|level|query|integer| 否 ||1普通客户，2会员|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 3,
    "list": [
      {
        "storeCustomerId": 2,
        "customerId": 0,
        "phone": "18685470353",
        "name": "小明",
        "noteName": "张晓明",
        "avatar": "",
        "adviserId": 5,
        "adviserUserName": null,
        "artisanId": 11,
        "artisanUserName": "张三",
        "level": 1,
        "birthday": "1972-10-19",
        "gender": null,
        "genderDesc": null,
        "integration": 0,
        "amount": 0,
        "lastPayTime": null
      },
      {
        "storeCustomerId": 3,
        "customerId": 0,
        "phone": "18685470352",
        "name": "小明",
        "noteName": "张晓明",
        "avatar": "",
        "adviserId": 5,
        "adviserUserName": null,
        "artisanId": 5,
        "artisanUserName": null,
        "level": 1,
        "birthday": "1972-10-19",
        "gender": null,
        "genderDesc": null,
        "integration": 0,
        "amount": 0,
        "lastPayTime": null
      },
      {
        "storeCustomerId": 7,
        "customerId": 0,
        "phone": "18125236520",
        "name": "化青",
        "noteName": "",
        "avatar": "",
        "adviserId": 0,
        "adviserUserName": null,
        "artisanId": 0,
        "artisanUserName": null,
        "level": 1,
        "birthday": null,
        "gender": null,
        "genderDesc": null,
        "integration": 0,
        "amount": 0,
        "lastPayTime": null
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» storeCustomerId|integer|true|none|门店客户id|none|
|»»» customerId|integer|true|none|客户id|none|
|»»» phone|string|true|none|门店客户手机号|none|
|»»» name|string|true|none|门店客户姓名|none|
|»»» noteName|string|true|none|门店客户备注名|none|
|»»» avatar|string|true|none|头像|none|
|»»» adviserId|integer|true|none|顾问门店员工id|none|
|»»» adviserUserName|string|true|none||none|
|»»» artisanId|integer|true|none|手艺人|none|
|»»» artisanUserName|string|true|none|手艺人名|none|
|»»» level|integer|true|none|会员|none|
|»»» birthday|string¦null|true|none|生日|none|
|»»» gender|string|true|none||none|
|»»» genderDesc|null|true|none|性别中文|none|
|»»» integration|integer|true|none|积分|none|
|»»» amount|integer|true|none|余额|none|
|»»» lastPayTime|string¦null|true|none||none|

## GET 客户详情

GET /business/store-customer/{storeCustomerId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeCustomerId|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "id": 7,
    "createBy": 5,
    "createTime": "2024-07-14 22:34:24",
    "updateBy": 0,
    "updateTime": null,
    "customerId": 0,
    "phone": "18125236520",
    "name": "化青",
    "noteName": "",
    "avatar": "",
    "source": "",
    "adviserId": 0,
    "adviserName": "",
    "artisanId": 0,
    "artisanName": "",
    "level": "普通客户",
    "birthday": null,
    "gender": "未知",
    "province": "",
    "city": "",
    "county": "",
    "address": "",
    "notes": "",
    "wechatCode": "",
    "orgId": 4,
    "storeId": 28,
    "integration": 375280,
    "historyIntegration": 397240,
    "amount": 600,
    "historyExpend": 186600,
    "cardC": 56,
    "expendC": 30,
    "lastPayTime": "2024-09-01T10:45:09"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none|店铺客户id|none|
|»» createBy|integer|true|none||none|
|»» createTime|string|true|none||none|
|»» updateBy|integer|true|none||none|
|»» updateTime|null|true|none||none|
|»» customerId|integer|true|none|客户id|none|
|»» phone|string|true|none|手机号|none|
|»» name|string|true|none|姓名|none|
|»» noteName|string|true|none|备注名|none|
|»» avatar|string|true|none|头像|none|
|»» source|string|true|none|来源|none|
|»» adviserId|integer|true|none|顾问|none|
|»» adviserName|string|true|none|顾问姓名|none|
|»» artisanId|integer|true|none|手艺人|none|
|»» artisanName|string|true|none|手艺人姓名|none|
|»» level|string|true|none|会员等级|1->普通客户，2->vip客户|
|»» birthday|null|true|none||none|
|»» gender|string|true|none|性别|1男，2女，0未知|
|»» province|string|true|none|省|none|
|»» city|string|true|none|市|none|
|»» county|string|true|none|区|none|
|»» address|string|true|none|地址|none|
|»» notes|string|true|none|备注|none|
|»» wechatCode|string|true|none|微信|none|
|»» orgId|integer|true|none||none|
|»» storeId|integer|true|none|店铺|none|
|»» integration|integer|true|none|可用积分|none|
|»» historyIntegration|integer|true|none|累计获取积分|none|
|»» amount|integer|true|none|余额|none|
|»» historyExpend|integer|true|none|累计消费|none|
|»» cardC|integer|true|none|购卡数|none|
|»» expendC|integer|true|none|消费次数|none|
|»» lastPayTime|string|true|none||none|

## DELETE 客户删除

DELETE /business/store-customer/{storeCustomerId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeCustomerId|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|

## POST 添加预约

POST /business/booking

> Body 请求参数

```json
{
  "storeId": 3,
  "storeCustomerPhone": "18103050036",
  "storeCustomerName": "化青",
  "storeCustomerId": 7,
  "storeServiceType": 1,
  "startTime": "2025-01-18 12:30:00",
  "artisanId": 16,
  "notes": "non aliqua cupidatat Ut",
  "payType": 1,
  "customerCardId": 0,
  "service": [
    {
      "storeServiceId": 5,
      "totalAmount": 100,
      "amount": 100,
      "customerCardId": 0,
      "cardId": 0,
      "cardReduceAmount": 0,
      "goodsCount": 2
    }
  ],
  "amount": 100
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|integer| 是 | 当前门店id|当前门店id|
|» storeCustomerPhone|body|string| 是 | 客户手机号|none|
|» storeCustomerName|body|string| 是 | 客户姓名|none|
|» storeCustomerId|body|integer| 否 | 手机号查询到的门店客户id|none|
|» storeServiceType|body|integer| 是 | 服务类型|1到店，2上门|
|» startTime|body|string| 是 | 服务开始时间|yyyy-MM-dd HH:mm:ss|
|» artisanId|body|integer| 是 | 分配的手艺人|取值storeStaffId|
|» notes|body|string| 是 | 备注|none|
|» payType|body|integer| 是 | 支付方式|立即支付时必填|
|» customerCardId|body|integer| 否 | 储值卡id|储值卡支付时必填|
|» service|body|[object]| 是 | 预约的服务列表|none|
|»» storeServiceId|body|integer| 是 | 服务id|none|
|»» totalAmount|body|number| 是 | 优惠前金额|none|
|»» amount|body|number| 是 | 优惠后金额|none|
|»» customerCardId|body|number| 否 | 用的购卡id|none|
|»» cardId|body|number| 否 | 卡id|none|
|»» cardReduceAmount|body|number| 否 | 卡优惠金额|none|
|»» goodsCount|body|number| 是 | 数量|none|
|» amount|body|number| 是 | 支付总金额|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» gainIntegral|integer|true|none|获取到的积分|none|
|»» orderId|integer|true|none|订单id|none|
|»» payAmount|integer|true|none|付款金额|none|
|»» payStatus|integer|true|none|付款状态|none|

## GET 预约列表

GET /business/booking

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|pageSize|query|integer| 否 ||none|
|pageNum|query|integer| 否 ||none|
|storeId|query|number| 是 ||none|
|status|query|number| 否 ||1待服务，2服务中，3已完成，4已取消|
|storeCustomerId|query|integer| 否 ||客户id|
|artisanId|query|integer| 否 ||手艺人storeStaffId；null全部，0未分配|
|sDate|query|string| 否 ||2025-01-01|
|eDate|query|string| 否 ||2025-01-01|
|sTime|query|string| 否 ||09:00:00或者09:00|
|eTime|query|string| 否 ||09:00:00或者09:00|
|keyword|query|string| 否 ||客户名手机号模糊查询|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 16,
    "list": [
      {
        "bookingId": 5,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-23 20:36:56",
        "duration": 60,
        "startTimeStr": "20:36-21:36",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 3,
            "serviceName": "服务22",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ],
        "payStatus": 2
      },
      {
        "bookingId": 6,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-23 20:52:36",
        "duration": 60,
        "startTimeStr": "20:52-21:52",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 3,
            "serviceName": "服务22",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ],
        "payStatus": 2
      },
      {
        "bookingId": 7,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-23 20:57:44",
        "duration": 60,
        "startTimeStr": "20:57-21:57",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 3,
            "serviceName": "服务22",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ],
        "payStatus": 2
      },
      {
        "bookingId": 8,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-23 20:57:48",
        "duration": 60,
        "startTimeStr": "20:57-21:57",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 3,
            "serviceName": "服务22",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ],
        "payStatus": 2
      },
      {
        "bookingId": 9,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-23 23:10:16",
        "duration": 60,
        "startTimeStr": "23:10-00:10",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 3,
            "serviceName": "服务22",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ],
        "payStatus": 2
      },
      {
        "bookingId": 10,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-28 09:29:10",
        "duration": 60,
        "startTimeStr": "09:29-10:29",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 6,
            "serviceName": "服务3",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ],
        "payStatus": 4
      },
      {
        "bookingId": 12,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "artisanId": 16,
        "artisanName": "SADA",
        "artisanPhone": "17512054856",
        "startTime": "2024-08-01 10:00:00",
        "duration": 60,
        "startTimeStr": "10:00-11:00",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 6,
            "serviceName": "服务3",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ],
        "payStatus": 2
      },
      {
        "bookingId": 13,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "artisanId": 16,
        "artisanName": "SADA",
        "artisanPhone": "17512054856",
        "startTime": "2024-09-01 10:43:31",
        "duration": 60,
        "startTimeStr": "10:43-11:43",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 5,
            "serviceName": "服务2",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ],
        "payStatus": 2
      },
      {
        "bookingId": 14,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "artisanId": 16,
        "artisanName": "SADA",
        "artisanPhone": "17512054856",
        "startTime": "2024-09-01 10:43:58",
        "duration": 60,
        "startTimeStr": "10:43-11:43",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 5,
            "serviceName": "服务2",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ],
        "payStatus": 2
      },
      {
        "bookingId": 15,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "artisanId": 16,
        "artisanName": "SADA",
        "artisanPhone": "17512054856",
        "startTime": "2024-09-01 10:45:09",
        "duration": 60,
        "startTimeStr": "10:45-11:45",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 5,
            "serviceName": "服务2",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ],
        "payStatus": 2
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» bookingId|integer|true|none|预约id|none|
|»»» storeCustomerId|integer|true|none|门店客户id|none|
|»»» storeCustomerName|string|true|none|门店客户名|none|
|»»» phone|string|true|none|预约联系电话|none|
|»»» storeServiceType|integer|true|none|服务类别|到店，2上门|
|»»» storeServiceTypeDesc|string|true|none|服务类别中文|none|
|»»» artisanId|integer|true|none|手艺人|none|
|»»» artisanName|string|true|none||none|
|»»» artisanPhone|string|true|none||none|
|»»» startTime|string|true|none|开始时间|none|
|»»» duration|integer|true|none|时长|none|
|»»» startTimeStr|string|true|none|开始时间拼接|none|
|»»» bookingStatus|integer|true|none|预约状态|none|
|»»» bookingStatusDesc|string|true|none|预约状态中文|none|
|»»» serviceList|[object]|true|none|服务|none|
|»»»» storeServiceId|integer|true|none|服务id|none|
|»»»» serviceName|string|true|none|服务名|none|
|»»»» serviceCoverImg|string|true|none|服务头图|none|
|»»»» duration|integer|true|none|时长|none|
|»»»» count|integer|true|none|数量|none|
|»»»» amount|integer|true|none|所属子订单支付金额|none|
|»»» payStatus|integer|true|none|支付状态|none|

## GET 预约详情

GET /business/booking/{bookingId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|bookingId|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "customerId": 0,
    "storeCustomerId": 7,
    "storeCustomerPhone": "18125236520",
    "storeCustomerName": "化青",
    "storeCustomerNamePY": "HQ",
    "customerCardC": 56,
    "storeCustomerAvatar": "",
    "startTime": "2024-12-08T10:13:26",
    "customerAddress": "",
    "artisanId": 16,
    "artisanName": "SADA",
    "notes": "non aliqua cupidatat Ut",
    "bookingService": [
      {
        "storeServiceId": 5,
        "serviceName": "服务2",
        "serviceCoverImg": "http://dummyimage.com/400x400",
        "duration": 120,
        "count": 2,
        "amount": 100
      }
    ],
    "bookingRecord": {
      "createBy": null,
      "createTime": null,
      "createHandleType": null,
      "createHandleTypeDesc": null,
      "signTime": null,
      "cancelTime": null,
      "finishTime": null,
      "signHandleType": null,
      "signHandleTypeDesc": null,
      "cancelHandleType": null,
      "cancelHandleTypeDesc": null,
      "finishHandleType": null,
      "finishHandleTypeDesc": null
    },
    "storeName": "5门店1",
    "bookingStatus": 1,
    "bookingStatusDesc": "待服务",
    "orderId": 64,
    "payStatus": 2,
    "storeServiceType": 1,
    "storeServiceTypeDesc": "到店服务"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» customerId|integer|true|none||none|
|»» storeCustomerId|integer|true|none|门店客户id|none|
|»» storeCustomerPhone|string|true|none|门店客户手机号|none|
|»» storeCustomerName|string|true|none|客户名|none|
|»» storeCustomerNamePY|string|true|none|客户名拼音|none|
|»» customerCardC|integer|true|none|卡数量|none|
|»» storeCustomerAvatar|string|true|none|客户头像|none|
|»» startTime|string|true|none|预约开始时间|none|
|»» customerAddress|string|true|none|地址|none|
|»» artisanId|integer|true|none|手艺人|0表示未分配|
|»» artisanName|string|true|none|手艺人|none|
|»» notes|string|true|none|备注|none|
|»» bookingService|[object]|true|none|预约的服务列表|none|
|»»» storeServiceId|integer|false|none|服务id|none|
|»»» serviceName|string|false|none|服务名|none|
|»»» serviceCoverImg|string|false|none|服务头图|none|
|»»» duration|integer|false|none|时长分钟|none|
|»»» count|integer|false|none|数量|none|
|»»» amount|integer|false|none|金额|none|
|»» bookingRecord|object|true|none||none|
|»»» createBy|null|true|none|创建人|none|
|»»» createTime|null|true|none|创建时间|none|
|»»» createHandleType|null|true|none|创建人类型|none|
|»»» createHandleTypeDesc|null|true|none|创建人类型|none|
|»»» signTime|null|true|none|签到时间|none|
|»»» cancelTime|null|true|none|取消时间|none|
|»»» finishTime|null|true|none|完成时间|none|
|»»» signHandleType|null|true|none|签到人|none|
|»»» signHandleTypeDesc|null|true|none||none|
|»»» cancelHandleType|null|true|none|取消人|none|
|»»» cancelHandleTypeDesc|null|true|none||none|
|»»» finishHandleType|null|true|none|完成人|none|
|»»» finishHandleTypeDesc|null|true|none||none|
|»» storeName|string|true|none|门店名|none|
|»» bookingStatus|integer|true|none|状态|WAIT(1,"待服务"),     UNDERWAY(2,"服务中"),     FINISH(3,"已完成"),     CANCEL(4,"已取消"),;|
|»» bookingStatusDesc|string|true|none||none|
|»» orderId|integer|true|none|订单id|none|
|»» payStatus|integer|true|none|支付状态|none|
|»» storeServiceType|integer|true|none||1到店，2上门|
|»» storeServiceTypeDesc|string|true|none||none|

## DELETE 删除预约

DELETE /business/booking/{bookingId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|bookingId|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 预约看板

GET /business/booking-dashboard

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||none|
|cDate|query|string| 是 ||none|
|status|query|number| 否 ||1待服务，2服务中，3已完成，4已取消|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "artisanId": 13,
      "artisanName": "姜军",
      "bookingList": [
        {
          "bookingId": 4,
          "storeCustomerId": 7,
          "storeCustomerName": "化青",
          "phone": "18125236520",
          "storeServiceType": 1,
          "storeServiceTypeDesc": "到店服务",
          "startTime": "2024-08-11 10:00:00",
          "duration": 120,
          "startTimeStr": "10:00-12:00",
          "bookingStatus": 1,
          "bookingStatusDesc": "待服务",
          "serviceList": [
            {
              "storeServiceId": 2,
              "serviceName": "服务1",
              "serviceCoverImg": "http://dummyimage.com/400x400",
              "duration": 60
            },
            {
              "storeServiceId": 3,
              "serviceName": "服务2",
              "serviceCoverImg": "http://dummyimage.com/400x400",
              "duration": 60
            }
          ]
        }
      ]
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» artisanId|integer|false|none||none|
|»» artisanName|string|false|none|手艺人名|none|
|»» bookingList|[object]|false|none|预约列表|none|
|»»» bookingId|integer|false|none|预约id|none|
|»»» storeCustomerId|integer|false|none|门店客户id|none|
|»»» storeCustomerName|string|false|none|门店客户名|none|
|»»» phone|string|false|none|客户手机号|none|
|»»» storeServiceType|integer|false|none|服务方式|none|
|»»» storeServiceTypeDesc|string|false|none|到店、上门|none|
|»»» startTime|string|false|none|开始时间|none|
|»»» duration|integer|false|none|时长|none|
|»»» startTimeStr|string|false|none|时长展示|none|
|»»» bookingStatus|integer|false|none|预约状态|1待服务，服务中2，已完成3，已取消4|
|»»» bookingStatusDesc|string|false|none|状态名|none|
|»»» serviceList|[object]|false|none|服务列表|none|
|»»»» storeServiceId|integer|true|none|服务id|none|
|»»»» serviceName|string|true|none|服务名|none|
|»»»» serviceCoverImg|string|true|none|服务头图|none|
|»»»» duration|integer|true|none|服务时长分钟|none|

## POST 开单

POST /business/billing

> Body 请求参数

```json
"{\r\n    \"storeId\":{{storeId}},\r\n    \"storeCustomerId\":7,\r\n    \"adviserId\":6,\r\n    \"notes\":\"备注\",\r\n    \"amount\":1000,\r\n    \"payType\":1,\r\n    \"billingGoods\":[\r\n        {\r\n            \"goodsType\":1,\r\n            \"goodsId\":5,\r\n            \"goodsCount\":1,\r\n            \"goodsPrice\":200,\r\n            \"totalAmount\":200,\r\n            \"amount\":200,\r\n            \"customerCardId\":0,\r\n            \"cardId\":0,\r\n            \"cardReduceAmount\":0,\r\n            \"artisanId\":6\r\n        },\r\n        {\r\n            \"goodsType\":3,\r\n            \"goodsId\":4,\r\n            \"goodsCount\":1,\r\n            \"goodsPrice\":1000,\r\n            \"totalAmount\":1000,\r\n            \"amount\":800,\r\n            \"customerCardId\":17,\r\n            \"cardId\":0,\r\n            \"cardReduceAmount\":200,\r\n            \"artisanId\":0\r\n        }\r\n    ]\r\n}"
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|integer| 是 | 当前门店id|none|
|» orderTime|body|string| 是 | 开单时间|none|
|» storeCustomerId|body|integer| 是 | 门店客户id|none|
|» adviserId|body|integer| 是 | 销售|none|
|» notes|body|string| 是 | 备注|none|
|» amount|body|integer| 是 | 待付总金额|none|
|» payType|body|integer| 是 | 支付方式|暂时只支持一种支付方式，不支持组合支付|
|» customerCardId|body|integer| 否 | 储值卡id|储值卡支付时必填|
|» billingGoods|body|[object]| 是 | 消费项目|none|
|»» goodsType|body|integer| 否 | 商品类型|1服务，2产品，3卡|
|»» goodsId|body|integer| 否 | 商品id|none|
|»» goodsCount|body|integer| 否 | 商品数量|none|
|»» goodsPrice|body|integer| 否 | 商品原价|none|
|»» totalAmount|body|integer| 否 | 商品原价总价|none|
|»» amount|body|integer| 否 | 商品优惠后总价|none|
|»» customerCardId|body|integer| 否 | 购卡id|符合已购卡优惠时填写|
|»» cardId|body|integer| 否 | 卡id|none|
|»» cardReduceAmount|body|integer| 否 | 卡优惠金额|none|
|»» artisanId|body|number| 否 | 受益人|服务|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "gainIntegral": 200
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» gainIntegral|integer|true|none|获取到的积分|none|
|»» orderId|integer|true|none|订单id|none|
|»» payAmount|integer|true|none|付款金额|none|
|»» payStatus|integer|true|none|付款状态|none|

## GET 订单列表

GET /business/order

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 否 ||none|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|searchStatus|query|integer| 否 ||状态：101待支付，102待服务，103已完成，104已取消|
|storeCustomerId|query|integer| 否 ||门店客户id|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 33,
    "list": [
      {
        "id": 266,
        "orderNo": "1880609505026449408",
        "createTime": "2025-01-18 21:33:41",
        "amount": 100,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 4,
            "goodsId": 32,
            "goodsName": "微雕",
            "goodsCount": 1,
            "goodsPrice": 100,
            "amount": 100,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/ad66078e-cad9-4840-b4f7-8a053fc85b1c.jpg",
            "artisanId": 28,
            "artisanName": "小石榴",
            "customerCardId": 0,
            "cardName": "",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 4,
        "createSourceType": "品项",
        "storeCustomerId": 78,
        "customerName": "客10号",
        "customerPhone": "13800138010"
      },
      {
        "id": 265,
        "orderNo": "1880608334769496064",
        "createTime": "2025-01-18 21:29:02",
        "amount": 100,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 4,
            "goodsId": 32,
            "goodsName": "微雕",
            "goodsCount": 1,
            "goodsPrice": 100,
            "amount": 100,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/ad66078e-cad9-4840-b4f7-8a053fc85b1c.jpg",
            "artisanId": 28,
            "artisanName": "小石榴",
            "customerCardId": 0,
            "cardName": "",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 4,
        "createSourceType": "品项",
        "storeCustomerId": 78,
        "customerName": "客10号",
        "customerPhone": "13800138010"
      },
      {
        "id": 264,
        "orderNo": "1880455184695672832",
        "createTime": "2025-01-18 11:20:28",
        "amount": 129,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 2,
            "goodsId": 15,
            "goodsName": "祛斑霜优惠价50",
            "goodsCount": 1,
            "goodsPrice": 100,
            "amount": 50,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/be17b1d8-fe31-418f-ab13-7cb05242a941.jpg",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 0,
            "cardName": "",
            "goodsCardType": null
          },
          {
            "goodsType": 1,
            "goodsId": 27,
            "goodsName": "美甲",
            "goodsCount": 1,
            "goodsPrice": 99,
            "amount": 79,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/7eaf6d0c-5284-4442-a733-b09473a384c4.jpg",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 0,
            "cardName": "",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 1,
        "createSourceType": "品项",
        "storeCustomerId": 77,
        "customerName": "客9号",
        "customerPhone": "13800138009"
      },
      {
        "id": 260,
        "orderNo": "1880092104283373568",
        "createTime": "2025-01-17 11:17:43",
        "amount": 0,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 4,
            "goodsId": 32,
            "goodsName": "微雕",
            "goodsCount": 1,
            "goodsPrice": 100,
            "amount": 0,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/ad66078e-cad9-4840-b4f7-8a053fc85b1c.jpg",
            "artisanId": 28,
            "artisanName": "小石榴",
            "customerCardId": 58,
            "cardName": "通卡三次",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 4,
        "createSourceType": "品项",
        "storeCustomerId": 74,
        "customerName": "客8号",
        "customerPhone": "13800138008"
      },
      {
        "id": 259,
        "orderNo": "1880089603828072448",
        "createTime": "2025-01-17 11:07:47",
        "amount": 63.2,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 4,
            "goodsId": 27,
            "goodsName": "美甲",
            "goodsCount": 1,
            "goodsPrice": 99,
            "amount": 63.2,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/7eaf6d0c-5284-4442-a733-b09473a384c4.jpg",
            "artisanId": 28,
            "artisanName": "小石榴",
            "customerCardId": 63,
            "cardName": "2000送200",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 4,
        "createSourceType": "品项",
        "storeCustomerId": 77,
        "customerName": "客9号",
        "customerPhone": "13800138009"
      },
      {
        "id": 258,
        "orderNo": "1880088778661675008",
        "createTime": "2025-01-17 11:04:30",
        "amount": 1000,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 5,
            "goodsId": 49,
            "goodsName": "2000送200",
            "goodsCount": 1,
            "goodsPrice": 1000,
            "amount": 1000,
            "goodsCoverImg": "",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 63,
            "cardName": "2000送200",
            "goodsCardType": 2
          }
        ],
        "searchStatus": 103,
        "createSource": 3,
        "createSourceType": "充值",
        "storeCustomerId": 77,
        "customerName": "客9号",
        "customerPhone": "13800138009"
      },
      {
        "id": 254,
        "orderNo": "1879834695266693120",
        "createTime": "2025-01-16 18:14:52",
        "amount": 0,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 4,
            "goodsId": 27,
            "goodsName": "美甲",
            "goodsCount": 1,
            "goodsPrice": 99,
            "amount": 0,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/7eaf6d0c-5284-4442-a733-b09473a384c4.jpg",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 51,
            "cardName": "通卡10次",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 4,
        "createSourceType": "品项",
        "storeCustomerId": 66,
        "customerName": "客7号",
        "customerPhone": "13800138007"
      },
      {
        "id": 252,
        "orderNo": "1879831771564175360",
        "createTime": "2025-01-16 18:03:15",
        "amount": 300,
        "payStatus": 4,
        "payStatusDesc": "已退款",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 32,
            "goodsName": "微雕",
            "goodsCount": 5,
            "goodsPrice": 100,
            "amount": 300,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/ad66078e-cad9-4840-b4f7-8a053fc85b1c.jpg",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 58,
            "cardName": "通卡三次",
            "goodsCardType": null
          }
        ],
        "searchStatus": 105,
        "createSource": 1,
        "createSourceType": "品项",
        "storeCustomerId": 74,
        "customerName": "客8号",
        "customerPhone": "13800138008"
      },
      {
        "id": 247,
        "orderNo": "1879741857820536832",
        "createTime": "2025-01-16 12:05:57",
        "amount": 0,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 32,
            "goodsName": "微雕",
            "goodsCount": 1,
            "goodsPrice": 100,
            "amount": 0,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/ad66078e-cad9-4840-b4f7-8a053fc85b1c.jpg",
            "artisanId": 28,
            "artisanName": "小石榴",
            "customerCardId": 58,
            "cardName": "通卡三次",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 1,
        "createSourceType": "品项",
        "storeCustomerId": 74,
        "customerName": "客8号",
        "customerPhone": "13800138008"
      },
      {
        "id": 246,
        "orderNo": "1879736946546405376",
        "createTime": "2025-01-16 11:46:27",
        "amount": 63.2,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 27,
            "goodsName": "美甲",
            "goodsCount": 1,
            "goodsPrice": 99,
            "amount": 63.2,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/7eaf6d0c-5284-4442-a733-b09473a384c4.jpg",
            "artisanId": 28,
            "artisanName": "小石榴",
            "customerCardId": 63,
            "cardName": "2000送200",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 1,
        "createSourceType": "品项",
        "storeCustomerId": 77,
        "customerName": "客9号",
        "customerPhone": "13800138009"
      },
      {
        "id": 245,
        "orderNo": "1879736719013801984",
        "createTime": "2025-01-16 11:45:32",
        "amount": 2000,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 3,
            "goodsId": 49,
            "goodsName": "2000送200",
            "goodsCount": 1,
            "goodsPrice": 2000,
            "amount": 2000,
            "goodsCoverImg": "",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 0,
            "cardName": "",
            "goodsCardType": 2
          }
        ],
        "searchStatus": 103,
        "createSource": 2,
        "createSourceType": "售卡",
        "storeCustomerId": 77,
        "customerName": "客9号",
        "customerPhone": "13800138009"
      },
      {
        "id": 231,
        "orderNo": "1879093497623162880",
        "createTime": "2025-01-14 17:09:36",
        "amount": 2000,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 5,
            "goodsId": 53,
            "goodsName": "5000送500",
            "goodsCount": 1,
            "goodsPrice": 2000,
            "amount": 2000,
            "goodsCoverImg": "",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 39,
            "cardName": "5000送500",
            "goodsCardType": 2
          }
        ],
        "searchStatus": 103,
        "createSource": 3,
        "createSourceType": "充值",
        "storeCustomerId": 66,
        "customerName": "客7号",
        "customerPhone": "13800138007"
      },
      {
        "id": 230,
        "orderNo": "1879091223727386624",
        "createTime": "2025-01-14 17:00:34",
        "amount": 0,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 3,
            "goodsId": 64,
            "goodsName": "通卡三次",
            "goodsCount": 1,
            "goodsPrice": 0,
            "amount": 0,
            "goodsCoverImg": "",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 0,
            "cardName": "",
            "goodsCardType": 1
          }
        ],
        "searchStatus": 103,
        "createSource": 2,
        "createSourceType": "售卡",
        "storeCustomerId": 74,
        "customerName": "客8号",
        "customerPhone": "13800138008"
      },
      {
        "id": 229,
        "orderNo": "1879087009160704000",
        "createTime": "2025-01-14 16:43:49",
        "amount": 100,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 2,
            "goodsId": 14,
            "goodsName": "美容液",
            "goodsCount": 1,
            "goodsPrice": 199,
            "amount": 100,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/2a7e52de-a690-4799-886d-2426255b3de4.jpg",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 0,
            "cardName": "",
            "goodsCardType": null
          },
          {
            "goodsType": 1,
            "goodsId": 32,
            "goodsName": "微雕",
            "goodsCount": 1,
            "goodsPrice": 100,
            "amount": 0,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/ad66078e-cad9-4840-b4f7-8a053fc85b1c.jpg",
            "artisanId": 28,
            "artisanName": "小石榴",
            "customerCardId": 51,
            "cardName": "通卡10次",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 1,
        "createSourceType": "品项",
        "storeCustomerId": 66,
        "customerName": "客7号",
        "customerPhone": "13800138007"
      },
      {
        "id": 228,
        "orderNo": "1879085388708130816",
        "createTime": "2025-01-14 16:37:23",
        "amount": 0,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 27,
            "goodsName": "美甲",
            "goodsCount": 1,
            "goodsPrice": 99,
            "amount": 0,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/7eaf6d0c-5284-4442-a733-b09473a384c4.jpg",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 51,
            "cardName": "通卡10次",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 1,
        "createSourceType": "品项",
        "storeCustomerId": 66,
        "customerName": "客7号",
        "customerPhone": "13800138007"
      },
      {
        "id": 220,
        "orderNo": "1878711104986931200",
        "createTime": "2025-01-13 15:50:07",
        "amount": 0,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 2,
            "goodsId": 14,
            "goodsName": "美容液",
            "goodsCount": 2,
            "goodsPrice": 199,
            "amount": 0,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/2a7e52de-a690-4799-886d-2426255b3de4.jpg",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 33,
            "cardName": "10次护理",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 1,
        "createSourceType": "品项",
        "storeCustomerId": 64,
        "customerName": "客六号",
        "customerPhone": "13800138006"
      },
      {
        "id": 219,
        "orderNo": "1878705413672919040",
        "createTime": "2025-01-13 15:27:30",
        "amount": 179,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 32,
            "goodsName": "微雕",
            "goodsCount": 1,
            "goodsPrice": 100,
            "amount": 100,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/ad66078e-cad9-4840-b4f7-8a053fc85b1c.jpg",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 0,
            "cardName": "",
            "goodsCardType": null
          },
          {
            "goodsType": 1,
            "goodsId": 26,
            "goodsName": "基础护理",
            "goodsCount": 1,
            "goodsPrice": 79,
            "amount": 79,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/98f38a11-4855-45ce-b008-de38f956a0c2.jpg",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 0,
            "cardName": "",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 1,
        "createSourceType": "品项",
        "storeCustomerId": 64,
        "customerName": "客六号",
        "customerPhone": "13800138006"
      },
      {
        "id": 218,
        "orderNo": "1878693577925844992",
        "createTime": "2025-01-13 14:40:28",
        "amount": 0,
        "payStatus": 4,
        "payStatusDesc": "已退款",
        "orderItem": [
          {
            "goodsType": 4,
            "goodsId": 32,
            "goodsName": "微雕",
            "goodsCount": 1,
            "goodsPrice": 100,
            "amount": 0,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/ad66078e-cad9-4840-b4f7-8a053fc85b1c.jpg",
            "artisanId": 28,
            "artisanName": "小石榴",
            "customerCardId": 51,
            "cardName": "通卡10次",
            "goodsCardType": null
          }
        ],
        "searchStatus": 105,
        "createSource": 4,
        "createSourceType": "品项",
        "storeCustomerId": 66,
        "customerName": "客7号",
        "customerPhone": "13800138007"
      },
      {
        "id": 217,
        "orderNo": "1878682656901947392",
        "createTime": "2025-01-13 13:57:04",
        "amount": 0,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 3,
            "goodsId": 61,
            "goodsName": "通卡10次",
            "goodsCount": 1,
            "goodsPrice": 0,
            "amount": 0,
            "goodsCoverImg": "",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 0,
            "cardName": "",
            "goodsCardType": 1
          }
        ],
        "searchStatus": 103,
        "createSource": 2,
        "createSourceType": "售卡",
        "storeCustomerId": 66,
        "customerName": "客7号",
        "customerPhone": "13800138007"
      },
      {
        "id": 216,
        "orderNo": "1878657664533389312",
        "createTime": "2025-01-13 12:17:46",
        "amount": 0,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 4,
            "goodsId": 27,
            "goodsName": "美甲",
            "goodsCount": 1,
            "goodsPrice": 99,
            "amount": 0,
            "goodsCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/7eaf6d0c-5284-4442-a733-b09473a384c4.jpg",
            "artisanId": null,
            "artisanName": null,
            "customerCardId": 33,
            "cardName": "10次护理",
            "goodsCardType": null
          }
        ],
        "searchStatus": 103,
        "createSource": 4,
        "createSourceType": "品项",
        "storeCustomerId": 64,
        "customerName": "客六号",
        "customerPhone": "13800138006"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none|订单id|none|
|»»» orderNo|string|true|none|订单编号|none|
|»»» createTime|string|true|none|创建时间|none|
|»»» amount|integer|true|none||none|
|»»» payStatus|integer|true|none|支付状态|1待支付，2已支付，3未支付取消，4退款|
|»»» payStatusDesc|string|true|none|支付状态名|none|
|»»» orderItem|[object]|true|none||none|
|»»»» goodsType|integer|true|none|订单项类别|1服务，2产品，3卡，4预约|
|»»»» goodsId|integer|true|none|商品id|none|
|»»»» goodsName|string|true|none|商品名|none|
|»»»» goodsCount|integer|true|none|商品数量|none|
|»»»» goodsPrice|integer|true|none|商品价格|none|
|»»»» amount|integer|true|none||none|
|»»»» goodsCoverImg|string|true|none||none|
|»»»» artisanId|integer¦null|true|none||none|
|»»»» artisanName|string¦null|true|none||none|
|»»»» customerCardId|integer|true|none||none|
|»»»» cardName|string|true|none||none|
|»»»» goodsCardType|integer¦null|true|none||none|
|»»» searchStatus|integer|true|none|状态：101待支付，102待服务，103已完成，104已取消|none|
|»»» createSource|integer|true|none|创建来源|none|
|»»» createSourceType|string|true|none|创建来源归类|none|
|»»» storeCustomerId|integer|true|none|门店客户id|none|
|»»» customerName|string|true|none|客户名|none|
|»»» customerPhone|string|true|none|客户手机号|none|

## POST 订单退单

POST /business/order/refund

> Body 请求参数

```json
{
  "orderId": 269,
  "refundType": 3,
  "refundAmount": 1000,
  "notes": ""
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» orderId|body|integer| 是 | 订单id|none|
|» refundType|body|integer| 是 | 退款方式|/pay-type-conf接口refundType|
|» refundAmount|body|integer| 是 | 退款金额|none|
|» notes|body|string| 是 | 备注|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "refundId": 17,
    "refundAmount": 7000,
    "refundStatus": 2,
    "refundStatusDesc": "已退款",
    "refundType": 1,
    "refundTypeDesc": "现金",
    "notes": "退款备注",
    "refundTime": "2024-12-07 09:57:53"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» refundId|integer|true|none|退单id|none|
|»» refundAmount|integer|true|none|退单金额|none|
|»» refundStatus|integer|true|none|状态|none|
|»» refundStatusDesc|string|true|none|状态描述|none|
|»» refundType|integer|true|none|退款方式|none|
|»» refundTypeDesc|string|true|none||none|
|»» notes|string|true|none|备注|none|
|»» refundTime|string|true|none|退款时间|none|

## POST 订单取消

POST /business/order/cancel

> Body 请求参数

```json
{
  "orderId": 35
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» orderId|body|integer| 是 | 订单id|none|
|» refundType|body|integer| 是 | 退款方式|/pay-type-conf接口refundType|
|» refundAmount|body|integer| 是 | 退款金额|none|
|» notes|body|string| 是 | 备注|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 续费会员列表

GET /business/get-vip-list

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "id": 1,
      "title": "一个月",
      "subTitle": "￥90/月",
      "price": 90,
      "price2": 100,
      "duration": 1,
      "unit": "month",
      "discount": "9"
    },
    {
      "id": 2,
      "title": "一季",
      "subTitle": "3个月￥255，￥85/月",
      "price": 255,
      "price2": 300,
      "duration": 3,
      "unit": "month",
      "discount": "8.5"
    },
    {
      "id": 3,
      "title": "一年",
      "subTitle": "一年￥840，￥70/月",
      "price": 840,
      "price2": 1200,
      "duration": 12,
      "unit": "month",
      "discount": "7"
    },
    {
      "id": 4,
      "title": "二年",
      "subTitle": "二年￥1440，￥60/月",
      "price": 1440,
      "price2": 2400,
      "duration": 24,
      "unit": "month",
      "discount": "6"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 商家续费

POST /business/renew

> Body 请求参数

```json
{
  "vipPackageId": 1,
  "payType": 3,
  "amount": 0.01
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» vipPackageId|body|integer| 是 | 会员包id|none|
|» payType|body|integer| 是 | 支付类型|固定微信支付3|
|» amount|body|integer| 是 | 付款金额|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "appId": "wx208ed5b60f57b9bc",
    "timestamp": "1723358261",
    "nonceStr": "ysmSqN0mC2xUHlSt9669vqGiH9wy0qRe",
    "packageVal": "prepay_id=wx11143659363934377a9b5812d5c0fa0000",
    "signType": "RSA",
    "paySign": "FpWAPjFKu9id4I2Wk/OTpfNZAFdd6eECkV3iYbnVsW3QX20gfklNimXsLBGb5/elbieS8+Sl2sBO3Ha+L5iRYzldWofpqxLbW3K6ZXUE8i2TxK4hfqgo0CG6gVgsxdVg+zVUV8+RgemnDe2hK1c+cOMgk9BbN/BRGRJ//TBDHE70MHg8DsSXwaMm6gHYCLdhQXQe7TDuq1eNKvAqX8tSb9BoyqK5u+zK0nthps6mAcdmNbjj9DZqaC/eDXx7CPkfknzeuNFZ6ySYSzSZfHIUQWnV9ghJROemRPTK9KzGzzAowIYEI+3vX4bGgJwAx7nnjWTqEVvfk/gOVGvR17rkKA=="
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 商家续费记录

GET /business/renew

> Body 请求参数

```json
""
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 1,
    "list": [
      {
        "id": 8,
        "orgId": 4,
        "type": 1,
        "createTime": "2024-08-01 19:58:04",
        "days": 0,
        "payAmount": 90,
        "notes": "",
        "createBy": 5,
        "vipPackageId": 1,
        "payStatus": 1,
        "payStatusDesc": "待支付",
        "payType": 3,
        "payTypeDesc": "微信在线",
        "payTime": null,
        "payId": 7,
        "vipTitle": "一个月",
        "vipSubTitle": "￥90/月",
        "vipPrice": 90,
        "vipPrice2": 100,
        "vipDuration": 1,
        "vipUnit": "month",
        "vipDiscount": "9"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|false|none|续费记录id|none|
|»»» orgId|integer|false|none|商户id|none|
|»»» type|integer|false|none|续费类别|0->系统赠送，1客户操作|
|»»» createTime|string|false|none|创建时间|none|
|»»» days|integer|false|none|增加天数|none|
|»»» payAmount|integer|false|none|支付金额|none|
|»»» notes|string|false|none|备注|none|
|»»» createBy|integer|false|none||none|
|»»» vipPackageId|integer|false|none|续费包id|none|
|»»» payStatus|integer|false|none|支付状态|1待支付，2已支付，3未支付取消，4已退费|
|»»» payStatusDesc|string|false|none|支付状态名|none|
|»»» payType|integer|false|none|支付类型|none|
|»»» payTypeDesc|string|false|none|支付类型名|none|
|»»» payTime|null|false|none|支付时间|none|
|»»» payId|integer|false|none|支付id|none|
|»»» vipTitle|string|false|none|续费包名称|none|
|»»» vipSubTitle|string|false|none|续费包副标题|none|
|»»» vipPrice|integer|false|none|续费价格|none|
|»»» vipPrice2|integer|false|none|划线价|none|
|»»» vipDuration|integer|false|none|续费包时长|none|
|»»» vipUnit|string|false|none|时长单位|none|
|»»» vipDiscount|string|false|none|续费包折扣描述|none|

## GET 商家续费未支付重新发起支付

GET /business/renew-again/{renewId}

> Body 请求参数

```json
""
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|renewId|path|integer| 是 ||续费主键id|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "prepayId": "wx011958055878467dc10265352292e20000"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» prepayId|string|true|none||none|

## PUT 预约分配手艺人

PUT /business/booking/artisan

> Body 请求参数

```json
{
  "id": 12,
  "artisanId": 6
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|integer| 是 ||none|
|» artisanId|body|integer| 是 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 预约修改开始时间

PUT /business/booking/time

> Body 请求参数

```json
{
  "id": 12,
  "stime": "2024-08-01 10:00:00"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|integer| 是 ||none|
|» stime|body|string| 是 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 预约修改状态

PUT /business/booking/status

> Body 请求参数

```json
{
  "id": 12,
  "status": 3
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|integer| 是 ||none|
|» status|body|integer| 是 ||服务中2，已完成3，已取消4|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 客户订单列表

GET /business/store-customer/order

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeCustomerId|query|integer| 是 ||none|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 8,
    "list": [
      {
        "id": 12,
        "orderNo": "1817564436250562560",
        "createTime": "2024-07-28 22:15:04",
        "amount": 7320,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 6,
            "goodsName": "服务3",
            "goodsCount": 1,
            "goodsPrice": 23,
            "amount": 20,
            "goodsCoverImg": "http://dummyimage.com/400x400"
          },
          {
            "goodsType": 2,
            "goodsId": 5,
            "goodsName": "产品4",
            "goodsCount": 1,
            "goodsPrice": 150,
            "amount": 100,
            "goodsCoverImg": "http://dummyimage.com/400x400"
          },
          {
            "goodsType": 3,
            "goodsId": 7,
            "goodsName": "折扣卡8折",
            "goodsCount": 1,
            "goodsPrice": 200,
            "amount": 200,
            "goodsCoverImg": null
          },
          {
            "goodsType": 3,
            "goodsId": 6,
            "goodsName": "充值卡5000",
            "goodsCount": 1,
            "goodsPrice": 5000,
            "amount": 5000,
            "goodsCoverImg": null
          },
          {
            "goodsType": 3,
            "goodsId": 5,
            "goodsName": "次卡通卡",
            "goodsCount": 1,
            "goodsPrice": 1000,
            "amount": 1000,
            "goodsCoverImg": null
          },
          {
            "goodsType": 3,
            "goodsId": 4,
            "goodsName": "次卡无限次卡",
            "goodsCount": 1,
            "goodsPrice": 1000,
            "amount": 1000,
            "goodsCoverImg": null
          }
        ]
      },
      {
        "id": 10,
        "orderNo": "1817371686750208000",
        "createTime": "2024-07-28 09:29:09",
        "amount": 7320,
        "payStatus": 4,
        "payStatusDesc": "已退款",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 6,
            "goodsName": "服务3",
            "goodsCount": 1,
            "goodsPrice": 23,
            "amount": 20,
            "goodsCoverImg": "http://dummyimage.com/400x400"
          },
          {
            "goodsType": 2,
            "goodsId": 5,
            "goodsName": "产品4",
            "goodsCount": 1,
            "goodsPrice": 150,
            "amount": 100,
            "goodsCoverImg": "http://dummyimage.com/400x400"
          },
          {
            "goodsType": 3,
            "goodsId": 7,
            "goodsName": "折扣卡8折",
            "goodsCount": 1,
            "goodsPrice": 200,
            "amount": 200,
            "goodsCoverImg": null
          },
          {
            "goodsType": 3,
            "goodsId": 6,
            "goodsName": "充值卡5000",
            "goodsCount": 1,
            "goodsPrice": 5000,
            "amount": 5000,
            "goodsCoverImg": null
          },
          {
            "goodsType": 3,
            "goodsId": 5,
            "goodsName": "次卡通卡",
            "goodsCount": 1,
            "goodsPrice": 1000,
            "amount": 1000,
            "goodsCoverImg": null
          },
          {
            "goodsType": 3,
            "goodsId": 4,
            "goodsName": "次卡无限次卡",
            "goodsCount": 1,
            "goodsPrice": 1000,
            "amount": 1000,
            "goodsCoverImg": null
          }
        ]
      },
      {
        "id": 9,
        "orderNo": "1815766382644051968",
        "createTime": "2024-07-23 23:10:15",
        "amount": 200,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 3,
            "goodsName": "服务2",
            "goodsCount": 1,
            "goodsPrice": 23,
            "amount": 200,
            "goodsCoverImg": "http://dummyimage.com/400x400"
          }
        ]
      },
      {
        "id": 8,
        "orderNo": "1815733048299847680",
        "createTime": "2024-07-23 20:57:48",
        "amount": 200,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 3,
            "goodsName": "服务2",
            "goodsCount": 1,
            "goodsPrice": 23,
            "amount": 200,
            "goodsCoverImg": "http://dummyimage.com/400x400"
          }
        ]
      },
      {
        "id": 7,
        "orderNo": "1815733029178015744",
        "createTime": "2024-07-23 20:57:43",
        "amount": 200,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 3,
            "goodsName": "服务2",
            "goodsCount": 1,
            "goodsPrice": 23,
            "amount": 200,
            "goodsCoverImg": "http://dummyimage.com/400x400"
          }
        ]
      },
      {
        "id": 6,
        "orderNo": "1815731738657701888",
        "createTime": "2024-07-23 20:52:35",
        "amount": 200,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 3,
            "goodsName": "服务2",
            "goodsCount": 1,
            "goodsPrice": 23,
            "amount": 200,
            "goodsCoverImg": "http://dummyimage.com/400x400"
          }
        ]
      },
      {
        "id": 5,
        "orderNo": "1815727798356594688",
        "createTime": "2024-07-23 20:36:56",
        "amount": 200,
        "payStatus": 2,
        "payStatusDesc": "已支付",
        "orderItem": [
          {
            "goodsType": 1,
            "goodsId": 3,
            "goodsName": "服务2",
            "goodsCount": 1,
            "goodsPrice": 23,
            "amount": 200,
            "goodsCoverImg": "http://dummyimage.com/400x400"
          }
        ]
      },
      {
        "id": 2,
        "orderNo": "1812495870262329344",
        "createTime": "2024-07-14 22:34:24",
        "amount": 0,
        "payStatus": 1,
        "payStatusDesc": "待支付",
        "orderItem": []
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» orderNo|string|true|none|订单编号|none|
|»»» createTime|string|true|none|创建时间|none|
|»»» amount|integer|true|none|订单金额|none|
|»»» payStatus|integer|true|none|支付状态|1待支付，2已支付，3未支付取消，4退款|
|»»» payStatusDesc|string|true|none||none|
|»»» orderItem|[object]|true|none||none|
|»»»» goodsType|integer|true|none|商品类别|1服务，2产品，3卡，4预约|
|»»»» goodsId|integer|true|none||none|
|»»»» goodsName|string|true|none||none|
|»»»» goodsCount|integer|true|none||none|
|»»»» goodsPrice|integer|true|none||none|
|»»»» amount|integer|true|none||none|
|»»»» goodsCoverImg|string¦null|true|none||none|

## GET 客户预约列表

GET /business/store-customer/booking

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeCustomerId|query|integer| 是 ||none|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 13,
    "list": [
      {
        "bookingId": 5,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "storeStaffId": 0,
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-23 20:36:56",
        "duration": 60,
        "startTimeStr": "20:36-21:36",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 3,
            "serviceName": "服务22",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ]
      },
      {
        "bookingId": 6,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "storeStaffId": 0,
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-23 20:52:36",
        "duration": 60,
        "startTimeStr": "20:52-21:52",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 3,
            "serviceName": "服务22",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ]
      },
      {
        "bookingId": 7,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "storeStaffId": 0,
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-23 20:57:44",
        "duration": 60,
        "startTimeStr": "20:57-21:57",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 3,
            "serviceName": "服务22",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ]
      },
      {
        "bookingId": 8,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "storeStaffId": 0,
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-23 20:57:48",
        "duration": 60,
        "startTimeStr": "20:57-21:57",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 3,
            "serviceName": "服务22",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ]
      },
      {
        "bookingId": 9,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "storeStaffId": 0,
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-23 23:10:16",
        "duration": 60,
        "startTimeStr": "23:10-00:10",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 3,
            "serviceName": "服务22",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ]
      },
      {
        "bookingId": 10,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "storeStaffId": 0,
        "artisanId": 0,
        "artisanName": "",
        "artisanPhone": "",
        "startTime": "2024-07-28 09:29:10",
        "duration": 60,
        "startTimeStr": "09:29-10:29",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 6,
            "serviceName": "服务3",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ]
      },
      {
        "bookingId": 12,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "storeStaffId": 0,
        "artisanId": 6,
        "artisanName": "范娟",
        "artisanPhone": "13590202726",
        "startTime": "2024-08-01 10:00:00",
        "duration": 60,
        "startTimeStr": "10:00-11:00",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 6,
            "serviceName": "服务3",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ]
      },
      {
        "bookingId": 13,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "storeStaffId": 0,
        "artisanId": 6,
        "artisanName": "范娟",
        "artisanPhone": "13590202726",
        "startTime": "2024-09-01 10:43:31",
        "duration": 60,
        "startTimeStr": "10:43-11:43",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 5,
            "serviceName": "服务2",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ]
      },
      {
        "bookingId": 14,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "storeStaffId": 0,
        "artisanId": 6,
        "artisanName": "范娟",
        "artisanPhone": "13590202726",
        "startTime": "2024-09-01 10:43:58",
        "duration": 60,
        "startTimeStr": "10:43-11:43",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 5,
            "serviceName": "服务2",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ]
      },
      {
        "bookingId": 15,
        "storeCustomerId": 7,
        "storeCustomerName": "化青",
        "phone": "18125236520",
        "storeServiceType": 1,
        "storeServiceTypeDesc": "到店服务",
        "storeStaffId": 0,
        "artisanId": 6,
        "artisanName": "范娟",
        "artisanPhone": "13590202726",
        "startTime": "2024-09-01 10:45:09",
        "duration": 60,
        "startTimeStr": "10:45-11:45",
        "bookingStatus": 3,
        "bookingStatusDesc": "已完成",
        "serviceList": [
          {
            "storeServiceId": 5,
            "serviceName": "服务2",
            "serviceCoverImg": "http://dummyimage.com/400x400",
            "duration": 60,
            "count": 0,
            "amount": 0
          }
        ]
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» bookingId|integer|true|none||none|
|»»» storeCustomerId|integer|true|none||none|
|»»» storeCustomerName|string|true|none||none|
|»»» phone|string|true|none||none|
|»»» storeServiceType|integer|true|none||none|
|»»» storeServiceTypeDesc|string|true|none||none|
|»»» storeStaffId|integer|true|none||none|
|»»» artisanId|integer|true|none||none|
|»»» artisanName|string|true|none||none|
|»»» artisanPhone|string|true|none||none|
|»»» startTime|string|true|none||none|
|»»» duration|integer|true|none||none|
|»»» startTimeStr|string|true|none||none|
|»»» bookingStatus|integer|true|none||none|
|»»» bookingStatusDesc|string|true|none||none|
|»»» serviceList|[object]|true|none||none|
|»»»» storeServiceId|integer|true|none||none|
|»»»» serviceName|string|true|none||none|
|»»»» serviceCoverImg|string|true|none||none|
|»»»» duration|integer|true|none||none|
|»»»» count|integer|true|none||none|
|»»»» amount|integer|true|none||none|

## GET 客户积分列表

GET /business/store-customer/integration

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeCustomerId|query|integer| 是 ||none|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|sDate|query|string| 否 ||none|
|eDate|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 4,
    "list": [
      {
        "id": 4,
        "createTime": "2024-07-28 22:15:04",
        "customerId": 0,
        "storeCustomerId": 7,
        "orgId": 4,
        "storeId": 28,
        "integration": 7320,
        "type": 1,
        "orderId": 12,
        "notes": "",
        "orderNo": "1817564436250562560",
        "orderPayStatus": 2
      },
      {
        "id": 3,
        "createTime": "2024-07-28 09:29:09",
        "customerId": 0,
        "storeCustomerId": 7,
        "orgId": 4,
        "storeId": 28,
        "integration": 7320,
        "type": 2,
        "orderId": 10,
        "notes": "",
        "orderNo": "1817371686750208000",
        "orderPayStatus": 4
      },
      {
        "id": 2,
        "createTime": "2024-07-28 09:29:09",
        "customerId": 0,
        "storeCustomerId": 7,
        "orgId": 4,
        "storeId": 28,
        "integration": 7320,
        "type": 1,
        "orderId": 10,
        "notes": "",
        "orderNo": "1817371686750208000",
        "orderPayStatus": 4
      },
      {
        "id": 1,
        "createTime": "2024-07-23 23:10:15",
        "customerId": 0,
        "storeCustomerId": 7,
        "orgId": 4,
        "storeId": 28,
        "integration": 200,
        "type": 1,
        "orderId": 9,
        "notes": "",
        "orderNo": "1815766382644051968",
        "orderPayStatus": 2
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» createTime|string|true|none|时间|none|
|»»» customerId|integer|true|none||none|
|»»» storeCustomerId|integer|true|none|门店客户id|none|
|»»» orgId|integer|true|none||none|
|»»» storeId|integer|true|none||none|
|»»» integration|integer|true|none|积分数|none|
|»»» type|integer|true|none|类别|1得到，2扣除|
|»»» orderId|integer|true|none||none|
|»»» notes|string|true|none||none|
|»»» orderNo|string|true|none|订单类别|none|
|»»» orderPayStatus|integer|true|none|订单支付状态|none|

## GET 门店售卡列表

GET /business/store-customer-card

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||当前门店id，当前门店id|
|storeCustomerId|query|integer| 否 ||客户id|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|status|query|integer| 否 ||1有效，2失效|
|keyword|query|string| 否 ||用户名或者手机号|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 3,
    "list": [
      {
        "id": 27,
        "storeId": 11,
        "cardId": 35,
        "cardName": "新用户10次特惠卡",
        "cardType": 1,
        "cardTypeDesc": "次卡",
        "cardSecondType": 1,
        "startTime": "2024-09-30 00:00:00",
        "expiresTime": "2024-11-30 23:59:59",
        "isLongTerm": 0,
        "expiresTimeDesc": "2024/09/30-2024/11/30",
        "createTime": "2024-12-25 09:28:18",
        "storeCustomerId": 53,
        "customerId": 0,
        "customerName": "李老板",
        "customerPhone": "188****8888",
        "customerAvatar": "",
        "useCount": 0,
        "countLimit": 10,
        "amount": 0,
        "gift": 0,
        "totalAmount": 0,
        "totalGift": 0,
        "orderId": 120,
        "payAmount": 100,
        "isValid": 0,
        "discountDesc": "0/10",
        "payStatus": 2
      },
      {
        "id": 22,
        "storeId": 11,
        "cardId": 37,
        "cardName": "冲200送20",
        "cardType": 2,
        "cardTypeDesc": "充值卡",
        "cardSecondType": 0,
        "startTime": "2025-01-03 00:00:00",
        "expiresTime": "2026-01-03 23:59:59",
        "isLongTerm": 0,
        "expiresTimeDesc": "2025/01/03-2026/01/03",
        "createTime": "2024-12-23 20:29:35",
        "storeCustomerId": 53,
        "customerId": 0,
        "customerName": "李老板",
        "customerPhone": "188****8888",
        "customerAvatar": "",
        "useCount": 0,
        "countLimit": 0,
        "amount": 20,
        "gift": 20,
        "totalAmount": 200,
        "totalGift": 20,
        "orderId": 108,
        "payAmount": 200,
        "isValid": 1,
        "discountDesc": "￥40.00/￥220.00",
        "payStatus": 2
      },
      {
        "id": 21,
        "storeId": 11,
        "cardId": 37,
        "cardName": "冲200送20",
        "cardType": 2,
        "cardTypeDesc": "充值卡",
        "cardSecondType": 0,
        "startTime": "2021-12-30 00:00:00",
        "expiresTime": "2023-12-30 23:59:59",
        "isLongTerm": 0,
        "expiresTimeDesc": "2021/12/30-2023/12/30",
        "createTime": "2024-12-23 18:08:24",
        "storeCustomerId": 53,
        "customerId": 0,
        "customerName": "李老板",
        "customerPhone": "188****8888",
        "customerAvatar": "",
        "useCount": 0,
        "countLimit": 0,
        "amount": 20,
        "gift": 20,
        "totalAmount": 200,
        "totalGift": 20,
        "orderId": 104,
        "payAmount": 200,
        "isValid": 0,
        "discountDesc": "￥40.00/￥220.00",
        "payStatus": 2
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» storeId|integer|true|none||none|
|»»» cardId|integer|true|none|卡id|none|
|»»» cardName|string|true|none|卡名称|none|
|»»» cardType|integer|true|none|卡类别|none|
|»»» cardTypeDesc|string|true|none|卡类别|none|
|»»» cardSecondType|integer|true|none||none|
|»»» startTime|string|true|none|有效开始时间|none|
|»»» expiresTime|string|true|none|有效期结束时间|none|
|»»» isLongTerm|integer|true|none|是否长期卡|none|
|»»» expiresTimeDesc|string|true|none|到期时间|none|
|»»» createTime|string|true|none|创建时间|none|
|»»» storeCustomerId|integer|true|none|门店客户id|none|
|»»» customerId|integer|true|none|客户id|none|
|»»» customerName|string|true|none|客户名|none|
|»»» customerPhone|string|true|none|客户手机号|none|
|»»» customerAvatar|string|true|none|客户头像|none|
|»»» useCount|integer|true|none|次卡使用次数|none|
|»»» countLimit|integer|true|none|不限次卡次数上限；有限次卡总次数|none|
|»»» amount|integer|true|none|充值卡剩余金额|none|
|»»» gift|integer|true|none|充值卡剩余赠送|none|
|»»» totalAmount|integer|true|none|累计充值|none|
|»»» totalGift|integer|true|none|累计赠送|none|
|»»» orderId|integer|true|none|订单id|none|
|»»» payAmount|integer|true|none|购买实付（储值卡首次支付金额）|none|
|»»» isValid|integer|true|none|1有效，0无效,2待支付，3已取消|none|
|»»» discountDesc|string|true|none|权益简介|none|
|»»» payStatus|integer|true|none|支付状态|none|

## POST 开卡

POST /business/store-customer-card

> Body 请求参数

```json
{
  "orderTime": "2024-08-01 10:00:00",
  "storeCustomerId": 7,
  "cardId": 7,
  "adviserId": 0,
  "notes": "备注",
  "amount": 200,
  "payType": 0,
  "customerCardId": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» orderTime|body|string| 是 | 下单时间|none|
|» storeCustomerId|body|integer| 是 | 客户id|none|
|» cardId|body|integer| 是 | 卡id|none|
|» adviserId|body|integer| 是 | 销售|none|
|» notes|body|string| 是 | 备注|none|
|» amount|body|integer| 是 | 金额|充值卡售价|
|» payType|body|integer| 是 | 支付方式|none|
|» customerCardId|body|integer| 是 | 储值卡支付|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» gainIntegral|integer|true|none|获取到的积分|none|
|»» orderId|integer|true|none|订单id|none|
|»» payAmount|integer|true|none|付款金额|none|
|»» payStatus|integer|true|none|付款状态|none|

## POST 卡充值

POST /business/value-card-recharge

> Body 请求参数

```json
{
  "orderTime": "2024-11-10 10:00:00",
  "storeCustomerId": 7,
  "customerCardId": 16,
  "adviserId": 0,
  "notes": "备注",
  "amount": 2000,
  "gift": 100,
  "payType": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» orderTime|body|string| 是 | 开单时间|none|
|» storeCustomerId|body|integer| 是 | 客户id|none|
|» customerCardId|body|integer| 是 | 购卡id|none|
|» adviserId|body|integer| 否 | 销售id|none|
|» notes|body|string| 否 | 备注|none|
|» amount|body|integer| 是 | 充值金额|none|
|» gift|body|integer| 否 | 赠送金额|none|
|» payType|body|integer| 是 | 支付方式|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» gainIntegral|integer|true|none|获取到的积分|none|
|»» orderId|integer|true|none|订单id|none|
|»» payAmount|integer|true|none|付款金额|none|
|»» payStatus|integer|true|none|付款状态|none|

## GET 邀请记录

GET /business/invite-record

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 1,
    "list": [
      {
        "id": 1,
        "inviteCode": "222",
        "createTime": "2024-08-08T21:51:39.000+08:00",
        "businessId": 5,
        "businessPhone": "186****7753",
        "businessName": "姜*",
        "inviteBusinessId": 5,
        "notes": "",
        "status": "待发放",
        "days": 0,
        "businessRenewId": 0
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[string]|true|none||none|
|»» accumulate|string|true|none|累计赠送|单位月|

## GET 购卡详情

GET /business/store-customer-card/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "customerId": 0,
    "storeCustomerId": 7,
    "storeCustomerPhone": "18125236520",
    "storeCustomerName": "化青",
    "storeCustomerAvatar": "",
    "storeCustomerCardC": 56,
    "cardId": 7,
    "cardName": "折扣卡8折",
    "cardSecondType": 0,
    "cardType": 2,
    "cardTypeDesc": "充值卡",
    "amount": 200,
    "gift": 0,
    "createTime": "2024-08-04T20:23:43",
    "startTime": "2024-08-04 20:23:43",
    "expiresTime": "2024-09-03 20:23:43",
    "isLongTerm": 0,
    "expiresTimeDesc": "2024/08/04-2024/09/03",
    "equityDesc": "服务1×85.00折；产品2×80.00折",
    "orderId": 21,
    "orderNo": "1820073120872574976",
    "refundId": 0,
    "refundTime": null,
    "countLimit": 0,
    "totalGift": 0,
    "totalAmount": 0,
    "payAmount": 200
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» customerId|integer|true|none|客户id|none|
|»» storeCustomerId|integer|true|none|门店客户id|none|
|»» storeCustomerPhone|string|true|none|客户手机号|none|
|»» storeCustomerName|string|true|none|客户名|none|
|»» storeCustomerAvatar|string|true|none||none|
|»» storeCustomerCardC|integer|true|none|客户卡数量|none|
|»» cardId|integer|true|none|卡id|none|
|»» cardName|string|true|none|卡名|none|
|»» cardSecondType|integer|true|none|次卡二级分类|none|
|»» cardType|integer|true|none|卡类别|none|
|»» cardTypeDesc|string|true|none||none|
|»» amount|integer|true|none|储值卡储值金额|none|
|»» gift|integer|true|none|储值赠送|none|
|»» createTime|string|true|none|创建时间|none|
|»» startTime|string|true|none|有效期开始时间|none|
|»» expiresTime|string|true|none|过期时间|none|
|»» isLongTerm|integer|true|none|是否长期有效|none|
|»» expiresTimeDesc|string|true|none|过期时间|none|
|»» equityDesc|string|true|none|权益说明|none|
|»» orderId|integer|true|none|订单id|none|
|»» orderNo|string|true|none|订单编号|none|
|»» refundId|integer|true|none|退费id|none|
|»» refundTime|null|true|none|退费订单编号|none|
|»» countLimit|integer|true|none|不限次卡，次数上限；有限次卡总次数|none|
|»» totalGift|integer|true|none|储值卡卡累计赠送|none|
|»» totalAmount|integer|true|none|储值卡卡累计充值|none|
|»» payAmount|integer|true|none|实付|储值卡首次充值金额|
|»» payStatus|integer|true|none|支付状态|none|

## GET 购卡权益列表

GET /business/store-customer-card/info/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "id": 21,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": null,
      "goodsPrice": 0
    },
    {
      "id": 22,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": null,
      "goodsPrice": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» goodsType|integer|true|none|商品类别|1服务，2产品，3卡|
|»» goodsId|integer|true|none||none|
|»» goodsName|string|true|none|商品名|none|
|»» equity|number|true|none|可用权益|none|
|»» goodsPrice|integer|true|none|增加权益时的商品价格|none|
|»» totalCount|integer|true|none|总次数，用于修改权益|none|

## PUT 修改购卡过期时间

PUT /business/store-customer-card/expires-time

> Body 请求参数

```json
{
  "id": 16,
  "startTime": "2024-08-27 20:11:00",
  "expiresTime": "2024-11-27 20:11:00"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|integer| 是 ||ID 编号|
|» expiresTime|body|string| 是 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 修改购卡名称

PUT /business/store-customer-card/card-name

> Body 请求参数

```json
{
  "id": 16,
  "cardName": "新名字"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|integer| 是 ||none|
|» cardName|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "msg": "string",
  "code": 0,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## PUT 修改购卡权益

PUT /business/store-customer-card/info

> Body 请求参数

```json
{
  "id": 19,
  "info": [
    {
      "id": 74,
      "goodsType": 1,
      "goodsId": 5,
      "goodsName": "钟馗服务1",
      "equity": 11,
      "totalCount": 10
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» id|body|number| 是 | 购卡id|none|
|» info|body|[object]| 是 ||none|
|»» id|body|integer| 是 | 详情得到的id|none|
|»» goodsType|body|integer| 是 | 商品类型|none|
|»» goodsId|body|integer| 是 | 商品id|none|
|»» goodsName|body|string| 是 | 商品名称|none|
|»» equity|body|integer| 是 | 服务次数，产品卡折扣1-100|none|
|» countLimit|body|number| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "msg": "string",
  "code": 0,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 购卡使用记录

GET /business/store-customer-card/record

支持分页结构，暂时数据全部返回，分页失效（后期根据数据量恢复分页）

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|customerCardId|query|integer| 是 ||none|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 2,
    "list": [
      {
        "id": 85,
        "notes": "",
        "createTime": "2025-01-19 10:57:26",
        "orderItemId": 314,
        "orderId": 279,
        "orderNo": "1880811694642630656",
        "payStatus": 3,
        "goodsName": "钟馗服务3",
        "goodsId": 8,
        "goodsCount": 1,
        "goodsType": 1,
        "cardReduceAmount": 200,
        "orderItemAmount": 0,
        "recordDesc": "+1",
        "orderAmount": 0,
        "type": 2,
        "typeDesc": "退还"
      },
      {
        "id": 84,
        "notes": "",
        "createTime": "2025-01-19 10:57:06",
        "orderItemId": 314,
        "orderId": 279,
        "orderNo": "1880811694642630656",
        "payStatus": 3,
        "goodsName": "钟馗服务3",
        "goodsId": 8,
        "goodsCount": 1,
        "goodsType": 1,
        "cardReduceAmount": 200,
        "orderItemAmount": 0,
        "recordDesc": "-1",
        "orderAmount": 0,
        "type": 1,
        "typeDesc": "消耗"
      }
    ],
    "use": "0",
    "surplus": "10"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» notes|string|true|none|备注|none|
|»»» createTime|string|true|none|时间|none|
|»»» orderItemId|integer|true|none|子订单id|none|
|»»» orderId|integer|true|none|订单id|none|
|»»» orderNo|string|true|none|订单编号|none|
|»»» payStatus|integer|true|none|支付状态|none|
|»»» goodsName|string|true|none|商品名|none|
|»»» goodsId|integer|true|none|商品id|none|
|»»» goodsCount|integer|true|none|商品数量|购买数量，不等于抵扣数量|
|»»» goodsType|integer|true|none|商品类别|1服务，2产品，3卡，4预约，5充值|
|»»» cardReduceAmount|integer|true|none|用卡优惠金额|none|
|»»» orderItemAmount|integer|true|none|储值卡消耗金额|none|
|»»» recordDesc|string|true|none|描述|none|
|»»» orderAmount|integer|true|none|订单金额|none|
|»»» type|integer|true|none|类型|1消耗，2退还，3充值|
|»»» typeDesc|string|true|none|类型描述|none|
|»» use|string|true|none|次卡折扣卡使用次数，储值卡使用金额|none|
|»» surplus|string|true|none|次卡剩余次数，折扣卡抵扣金额，储值卡剩余金额|none|

## GET 门店收支明细

GET /business/store-account-record

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||当前门店|
|pageSize|query|integer| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|integer| 否 ||页码，默认1，页码，默认1|
|sTime|query|string| 否 ||优先级高于timeType|
|eTime|query|string| 否 ||none|
|timeType|query|string| 否 ||1,3,6,12近几个月|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 26,
    "list": [
      {
        "id": 26,
        "createBy": 5,
        "createTime": "2024-09-01 10:45:10",
        "orderId": 51,
        "orderNo": "1830074385052565504",
        "type": 1,
        "typeDesc": "收入",
        "amount": 1000,
        "orgId": 4,
        "storeId": 28
      },
      {
        "id": 25,
        "createBy": 5,
        "createTime": "2024-09-01 10:43:58",
        "orderId": 50,
        "orderNo": "1830074084731957248",
        "type": 1,
        "typeDesc": "收入",
        "amount": 1000,
        "orgId": 4,
        "storeId": 28
      },
      {
        "id": 24,
        "createBy": 5,
        "createTime": "2024-09-01 10:43:32",
        "orderId": 49,
        "orderNo": "1830073973134110720",
        "type": 1,
        "typeDesc": "收入",
        "amount": 1000,
        "orgId": 4,
        "storeId": 28
      },
      {
        "id": 23,
        "createBy": 5,
        "createTime": "2024-08-30 21:54:03",
        "orderId": 48,
        "orderNo": "1829517938883387392",
        "type": 1,
        "typeDesc": "收入",
        "amount": 7320,
        "orgId": 4,
        "storeId": 28
      },
      {
        "id": 22,
        "createBy": 5,
        "createTime": "2024-08-30 21:53:58",
        "orderId": 47,
        "orderNo": "1829517919165964288",
        "type": 1,
        "typeDesc": "收入",
        "amount": 7320,
        "orgId": 4,
        "storeId": 28
      },
      {
        "id": 21,
        "createBy": 5,
        "createTime": "2024-08-30 21:30:10",
        "orderId": 46,
        "orderNo": "1829511930358358016",
        "type": 1,
        "typeDesc": "收入",
        "amount": 7320,
        "orgId": 4,
        "storeId": 28
      },
      {
        "id": 20,
        "createBy": 5,
        "createTime": "2024-08-30 21:29:27",
        "orderId": 45,
        "orderNo": "1829511749986508800",
        "type": 1,
        "typeDesc": "收入",
        "amount": 7320,
        "orgId": 4,
        "storeId": 28
      },
      {
        "id": 19,
        "createBy": 5,
        "createTime": "2024-08-30 21:27:50",
        "orderId": 44,
        "orderNo": "1829511341893296128",
        "type": 1,
        "typeDesc": "收入",
        "amount": 7320,
        "orgId": 4,
        "storeId": 28
      },
      {
        "id": 18,
        "createBy": 5,
        "createTime": "2024-08-30 21:23:12",
        "orderId": 43,
        "orderNo": "1829510126329495552",
        "type": 1,
        "typeDesc": "收入",
        "amount": 7320,
        "orgId": 4,
        "storeId": 28
      },
      {
        "id": 17,
        "createBy": 5,
        "createTime": "2024-08-30 21:18:29",
        "orderId": 42,
        "orderNo": "1829508987521404928",
        "type": 1,
        "typeDesc": "收入",
        "amount": 7320,
        "orgId": 4,
        "storeId": 28
      }
    ],
    "income": 171360,
    "expend": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» createBy|integer|true|none||none|
|»»» createTime|string|true|none|创建时间|none|
|»»» orderId|integer|true|none||none|
|»»» orderNo|string|true|none||none|
|»»» type|integer|true|none|类别|1收入，2支出|
|»»» typeDesc|string|true|none|类别名|none|
|»»» amount|integer|true|none|金额|none|
|»»» orgId|integer|true|none||none|
|»»» storeId|integer|true|none||none|
|»» income|integer|true|none|搜索条件统计收入|none|
|»» expend|integer|true|none|搜索条件统计支出|none|

## GET 钱包

GET /business/store-wallet/{storeId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "totalAmount": 0,
    "platformAmount": 0,
    "frozenAmount": 0,
    "withdrawAmount": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» totalAmount|integer|true|none|累计收入|none|
|»» platformAmount|integer|true|none|可提现余额|none|
|»» frozenAmount|integer|true|none|冻结|none|
|»» withdrawAmount|integer|true|none|已提现|none|

## POST 发起提现

POST /business/store-withdraw

> Body 请求参数

```json
{
  "storeId": 28,
  "amount": 3,
  "withdrawType": 1
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeId|body|integer| 是 | 门店id|none|
|» amount|body|integer| 是 | 提现金额|none|
|» type|body|integer| 是 | 提现方式|1银行卡|

> 返回示例

> 200 Response

```json
{
  "msg": "string",
  "code": 0,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 提现记录

GET /business/store-withdraw

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||none|
|pageSize|query|string| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|string| 否 ||页码，默认1，页码，默认1|
|sTime|query|string| 否 ||优先级高于timeType|
|eTime|query|string| 否 ||none|
|timeType|query|string| 否 ||1,3,6,12近几个月|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 10,
    "list": [
      {
        "id": 1,
        "orgId": 4,
        "storeId": 28,
        "amount": 600,
        "createTime": "2024-08-13 21:58:28",
        "finishTime": null,
        "status": 1,
        "statusDesc": "待处理",
        "type": 1,
        "typeDesc": "银行卡",
        "withdrawNo": "1823358464271392768",
        "inspectRemark": 1,
        "inspectRemarkDesc": "待审核",
        "inspectTime": null,
        "overruleReason": ""
      },
      {
        "id": 2,
        "orgId": 4,
        "storeId": 28,
        "amount": 100,
        "createTime": "2024-08-13 22:23:16",
        "finishTime": null,
        "status": 1,
        "statusDesc": "待处理",
        "type": 1,
        "typeDesc": "银行卡",
        "withdrawNo": "1823364702984040448",
        "inspectRemark": 1,
        "inspectRemarkDesc": "待审核",
        "inspectTime": null,
        "overruleReason": ""
      },
      {
        "id": 3,
        "orgId": 4,
        "storeId": 28,
        "amount": 30,
        "createTime": "2024-08-15 23:07:08",
        "finishTime": null,
        "status": 1,
        "statusDesc": "待处理",
        "type": 1,
        "typeDesc": "银行卡",
        "withdrawNo": "1824100517456433152",
        "inspectRemark": 1,
        "inspectRemarkDesc": "待审核",
        "inspectTime": null,
        "overruleReason": ""
      },
      {
        "id": 4,
        "orgId": 4,
        "storeId": 28,
        "amount": 30,
        "createTime": "2024-08-15 23:11:11",
        "finishTime": null,
        "status": 1,
        "statusDesc": "待处理",
        "type": 1,
        "typeDesc": "银行卡",
        "withdrawNo": "1824101538937286656",
        "inspectRemark": 1,
        "inspectRemarkDesc": "待审核",
        "inspectTime": null,
        "overruleReason": ""
      },
      {
        "id": 5,
        "orgId": 4,
        "storeId": 28,
        "amount": 30,
        "createTime": "2024-08-15 23:13:10",
        "finishTime": null,
        "status": 1,
        "statusDesc": "待处理",
        "type": 1,
        "typeDesc": "银行卡",
        "withdrawNo": "1824102036624904192",
        "inspectRemark": 1,
        "inspectRemarkDesc": "待审核",
        "inspectTime": null,
        "overruleReason": ""
      },
      {
        "id": 6,
        "orgId": 4,
        "storeId": 28,
        "amount": 30,
        "createTime": "2024-08-15 23:13:42",
        "finishTime": null,
        "status": 1,
        "statusDesc": "待处理",
        "type": 1,
        "typeDesc": "银行卡",
        "withdrawNo": "1824102171173982208",
        "inspectRemark": 1,
        "inspectRemarkDesc": "待审核",
        "inspectTime": null,
        "overruleReason": ""
      },
      {
        "id": 7,
        "orgId": 4,
        "storeId": 28,
        "amount": 3,
        "createTime": "2024-08-15 23:17:37",
        "finishTime": null,
        "status": 1,
        "statusDesc": "待处理",
        "type": 1,
        "typeDesc": "银行卡",
        "withdrawNo": "1824103155648540672",
        "inspectRemark": 1,
        "inspectRemarkDesc": "待审核",
        "inspectTime": null,
        "overruleReason": ""
      },
      {
        "id": 8,
        "orgId": 4,
        "storeId": 28,
        "amount": 3,
        "createTime": "2024-08-15 23:19:46",
        "finishTime": null,
        "status": 1,
        "statusDesc": "待处理",
        "type": 1,
        "typeDesc": "银行卡",
        "withdrawNo": "1824103699008032768",
        "inspectRemark": 1,
        "inspectRemarkDesc": "待审核",
        "inspectTime": null,
        "overruleReason": ""
      },
      {
        "id": 9,
        "orgId": 4,
        "storeId": 28,
        "amount": 3,
        "createTime": "2024-08-15 23:23:11",
        "finishTime": null,
        "status": 1,
        "statusDesc": "待处理",
        "type": 1,
        "typeDesc": "银行卡",
        "withdrawNo": "1824104559809236992",
        "inspectRemark": 1,
        "inspectRemarkDesc": "待审核",
        "inspectTime": null,
        "overruleReason": ""
      },
      {
        "id": 10,
        "orgId": 4,
        "storeId": 28,
        "amount": 3,
        "createTime": "2024-08-15 23:23:54",
        "finishTime": null,
        "status": 1,
        "statusDesc": "待处理",
        "type": 1,
        "typeDesc": "银行卡",
        "withdrawNo": "1824104739816177664",
        "inspectRemark": 1,
        "inspectRemarkDesc": "待审核",
        "inspectTime": null,
        "overruleReason": ""
      }
    ],
    "totalAmount": 844
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» orgId|integer|true|none||none|
|»»» storeId|integer|true|none||none|
|»»» amount|integer|true|none|提现金额|none|
|»»» createTime|string|true|none|创建时间|none|
|»»» finishTime|null|true|none|完成时间|none|
|»»» status|integer|true|none|完成状态|：1->初始，2->进行中，3->完成|
|»»» statusDesc|string|true|none||none|
|»»» type|integer|true|none|提现方式|1银行卡，2微信零钱|
|»»» typeDesc|string|true|none||none|
|»»» withdrawNo|string|true|none|编号|none|
|»»» inspectRemark|integer|true|none|审核状态|1待审核，2通过，3驳回|
|»»» inspectRemarkDesc|string|true|none||none|
|»»» inspectTime|null|true|none|审核时间|none|
|»»» overruleReason|string|true|none|驳回原因|none|
|»» totalAmount|integer|true|none|总提现|none|

## PUT 设置提现银行卡

PUT /business/store-detail

> Body 请求参数

```json
{
  "storeId": 28,
  "legalName": "真实姓名",
  "legalId": "371524199007066218",
  "legalPhoto": "",
  "settlementBankAccountName": "招商银行",
  "settlementBankAccountNum": "151545513215",
  "settlementBankBranchName": "科技园支行"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 1,
    "list": [
      {
        "id": 1,
        "orgId": 4,
        "storeId": 28,
        "amount": 600,
        "createTime": "2024-08-13 21:58:28",
        "finishTime": null,
        "status": 1,
        "statusDesc": "待处理",
        "accountOutNo": "1823358464271392768",
        "inspectRemark": 1,
        "inspectRemarkDesc": "待审核",
        "inspectTime": null
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|false|none||none|
|»»» orgId|integer|false|none||none|
|»»» storeId|integer|false|none||none|
|»»» amount|integer|false|none|提现金额|none|
|»»» createTime|string|false|none|创建时间|none|
|»»» finishTime|null|false|none|完成时间|none|
|»»» status|integer|false|none|完成状态|：1->初始，2->进行中，3->完成|
|»»» statusDesc|string|false|none||none|
|»»» withdrawNo|string|false|none|编号|none|
|»»» inspectRemark|integer|false|none|审核状态|1待审核，2通过，3驳回|
|»»» inspectRemarkDesc|string|false|none||none|
|»»» inspectTime|null|false|none|审核时间|none|
|»»» overruleReason|string|false|none|驳回原因|none|

## GET 经营概况，客户分析

GET /business/stat-overview

经营数据，客户分析，都在这里面

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||门店id|
|sDate|query|string| 否 ||开始日期，含当天：2024-08-20|
|eDate|query|string| 否 ||结束日期，含当天：2024-08-20|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "vipCustomerCount": 1,
    "customerCount": 0,
    "orderCustomerCount": 4,
    "cardSaleCount": 4,
    "bookingCount": 3,
    "totalIncome": 90848,
    "storedUse": 15,
    "storedAdd": 17,
    "serviceProductIncome": 24619,
    "refundAmount": 21
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» vipCustomerCount|integer|true|none|新增会员数|客户分析|
|»» customerCount|integer|true|none|新增客户数|客户分析|
|»» orderCustomerCount|integer|true|none|成交客户数|客户分析|
|»» cardSaleCount|integer|true|none|开卡充值客户数|客户分析|
|»» bookingCount|integer|true|none|预约单数|客户分析|
|»» totalIncome|integer|true|none|实际收款金额|经营概况|
|»» storedUse|integer|true|none|客户消耗金额|经营概况|
|»» storedAdd|integer|true|none|开卡充值金额|经营概况|
|»» serviceProductIncome|integer|true|none||none|
|»» refundAmount|integer|true|none|退款金额|经营概况|

## GET 员工业绩排行

GET /business/stat-staff-ranking

经营数据，客户分析，都在这里面

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||门店id|
|sDate|query|string| 是 ||开始日期，含当天：2024-08-20|
|eDate|query|string| 是 ||结束日期，含当天：2024-08-20|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "serviceRanking": [
      {
        "orgStaffId": 6,
        "orgStaffName": "姜军",
        "income": 400
      }
    ],
    "saleRanking": [
      {
        "orgStaffId": 6,
        "orgStaffName": "姜军",
        "income": 5600
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» serviceRanking|[object]|true|none|服务排行|none|
|»»» orgStaffId|integer|false|none|员工org_staff_id|none|
|»»» orgStaffName|string|false|none|员工姓名|none|
|»»» income|integer|false|none|金额|none|
|»» saleRanking|[object]|true|none|销售排行|none|
|»»» orgStaffId|integer|false|none|员工org_staff_id|none|
|»»» orgStaffName|string|false|none|员工姓名|none|
|»»» income|integer|false|none|金额|none|

## GET 统计门店预约数量

GET /business/booking-count

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 否 ||当前门店id，当前门店id|
|cDate|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "all": 11,
    "wait": 1,
    "underway": 0,
    "finish": 10
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» all|integer|true|none|全部预约数|none|
|»» wait|integer|true|none|待服务|none|
|»» underway|integer|true|none|服务中|none|
|»» finish|integer|true|none|已完成|none|

## GET 员工业绩详情

GET /business/stat-staff-ranking-info

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|string| 是 ||当前门店id，当前门店id|
|orgStaffId|query|string| 是 ||员工id|
|sDate|query|string| 是 ||none|
|eDate|query|string| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "orgStaffId": 6,
    "saleService": 400,
    "saleProduct": 0,
    "saleCard": 5200,
    "saleRecharge": 0,
    "serviceArtisan": 400,
    "serviceTimesCard": 0,
    "serviceValueCard": 0,
    "serviceGift": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» orgStaffId|integer|true|none||none|
|»» saleService|integer|true|none|销售-服务收入|none|
|»» saleProduct|integer|true|none|销售-产品收入|none|
|»» saleCard|integer|true|none|销售-卡收入|none|
|»» saleRecharge|integer|true|none|销售-充值|none|
|»» serviceArtisan|integer|true|none|服务-劳动收入|none|
|»» serviceTimesCard|integer|true|none|服务-次卡抵扣|none|
|»» serviceValueCard|integer|true|none|服务-充值卡耗（余额支付）|none|
|»» serviceGift|integer|true|none|服务-赠送抵扣|none|

## GET 订单退单详情

GET /business/order/refund/{refundId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|refundId|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "refundNo": "1827634030566789120",
    "createTime": "2024-08-25 17:08:03",
    "refundTime": "2024-08-25 17:08:03",
    "refundAmount": 7000,
    "refundStatus": 2,
    "refundStatusDesc": "已退款",
    "refundType": 1,
    "refundTypeDesc": "现金",
    "notes": "退款备注",
    "refundCardEquity": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» refundNo|string|true|none|退款编号|none|
|»» createTime|string|true|none|退单创建时间|none|
|»» refundTime|string|true|none|退单付款时间|none|
|»» refundAmount|integer|true|none|退款金额|none|
|»» refundStatus|integer|true|none|退款状态|1待支付，2已支付，3未支付取消|
|»» refundStatusDesc|string|true|none|退款状态|none|
|»» refundType|integer|true|none|支付方式|none|
|»» refundTypeDesc|string|true|none|支付方式|none|
|»» notes|string|true|none|备注|none|
|»» refundCardEquity|integer|true|none|退卡权益次数|none|

## GET 手艺人时间占用

GET /business/booking-artisan

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||none|
|artisanId|query|integer| 是 ||手艺人org_staff_id；null全部，0未分配|
|cDate|query|string| 是 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "artisanId": 6,
      "currentDate": "2024-09-01",
      "startTime": "2024-09-01 10:43:31",
      "duration": 60,
      "employIndex": [
        21,
        22
      ]
    },
    {
      "artisanId": 6,
      "currentDate": "2024-09-01",
      "startTime": "2024-09-01 10:43:58",
      "duration": 60,
      "employIndex": [
        21,
        22
      ]
    },
    {
      "artisanId": 6,
      "currentDate": "2024-09-01",
      "startTime": "2024-09-01 10:45:09",
      "duration": 60,
      "employIndex": [
        21,
        22
      ]
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» artisanId|integer|true|none|手艺人id|none|
|»» currentDate|string|true|none|日期|none|
|»» startTime|string|true|none|开始时间|none|
|»» duration|integer|true|none|时长|none|
|»» employIndex|[integer]|true|none|占用时段格子index|none|

## GET 可用卡权益(弃用)

GET /business/store-customer-card-valid

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeCustomerId|query|number| 是 ||门店客户id|
|goodsId|query|string| 否 ||none|
|goodsType|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "customerCardId": 25,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:19:43",
      "expiresTime": "2024-09-23 17:19:43",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 25,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:19:43",
      "expiresTime": "2024-09-23 17:19:43",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 27,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:22:03",
      "expiresTime": "2024-09-23 17:22:03",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 27,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:22:03",
      "expiresTime": "2024-09-23 17:22:03",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 29,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:22:51",
      "expiresTime": "2024-09-23 17:22:51",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 29,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:22:51",
      "expiresTime": "2024-09-23 17:22:51",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 31,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:23:59",
      "expiresTime": "2024-09-23 17:23:59",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 31,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:23:59",
      "expiresTime": "2024-09-23 17:23:59",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 33,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:44:32",
      "expiresTime": "2024-09-23 17:44:32",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 33,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:44:32",
      "expiresTime": "2024-09-23 17:44:32",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 35,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:50:07",
      "expiresTime": "2024-09-23 17:50:07",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 35,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:50:07",
      "expiresTime": "2024-09-23 17:50:07",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 37,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 21:42:41",
      "expiresTime": "2024-09-23 21:42:41",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 37,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 21:42:41",
      "expiresTime": "2024-09-23 21:42:41",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 39,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 21:46:02",
      "expiresTime": "2024-09-23 21:46:02",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 39,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 21:46:02",
      "expiresTime": "2024-09-23 21:46:02",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 41,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 21:46:46",
      "expiresTime": "2024-09-23 21:46:46",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 41,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 21:46:46",
      "expiresTime": "2024-09-23 21:46:46",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 43,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 21:47:10",
      "expiresTime": "2024-09-23 21:47:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 43,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 21:47:10",
      "expiresTime": "2024-09-23 21:47:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 45,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 21:47:39",
      "expiresTime": "2024-09-23 21:47:39",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 45,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 21:47:39",
      "expiresTime": "2024-09-23 21:47:39",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 47,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-25 11:46:42",
      "expiresTime": "2024-09-24 11:46:42",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/25-2024/09/24",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 47,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-25 11:46:42",
      "expiresTime": "2024-09-24 11:46:42",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/25-2024/09/24",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 49,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-26 20:41:33",
      "expiresTime": "2024-09-25 20:41:33",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/26-2024/09/25",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 49,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-26 20:41:33",
      "expiresTime": "2024-09-25 20:41:33",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/26-2024/09/25",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 51,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 20:44:14",
      "expiresTime": "2024-09-29 20:44:14",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 51,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 20:44:14",
      "expiresTime": "2024-09-29 20:44:14",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 53,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 20:55:19",
      "expiresTime": "2024-09-29 20:55:19",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 53,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 20:55:19",
      "expiresTime": "2024-09-29 20:55:19",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 55,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 20:58:26",
      "expiresTime": "2024-09-29 20:58:26",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 55,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 20:58:26",
      "expiresTime": "2024-09-29 20:58:26",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 57,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:18:29",
      "expiresTime": "2024-09-29 21:18:29",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 57,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:18:29",
      "expiresTime": "2024-09-29 21:18:29",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 59,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:23:09",
      "expiresTime": "2024-09-29 21:23:09",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 59,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:23:09",
      "expiresTime": "2024-09-29 21:23:09",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 61,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:27:50",
      "expiresTime": "2024-09-29 21:27:50",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 61,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:27:50",
      "expiresTime": "2024-09-29 21:27:50",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 63,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:29:27",
      "expiresTime": "2024-09-29 21:29:27",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 63,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:29:27",
      "expiresTime": "2024-09-29 21:29:27",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 65,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:30:10",
      "expiresTime": "2024-09-29 21:30:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 65,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:30:10",
      "expiresTime": "2024-09-29 21:30:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 67,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:53:58",
      "expiresTime": "2024-09-29 21:53:58",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 67,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:53:58",
      "expiresTime": "2024-09-29 21:53:58",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 69,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:54:02",
      "expiresTime": "2024-09-29 21:54:02",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 69,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:54:02",
      "expiresTime": "2024-09-29 21:54:02",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 70,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-09-01 10:43:32",
      "expiresTime": "2024-10-01 10:43:32",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 70,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-09-01 10:43:32",
      "expiresTime": "2024-10-01 10:43:32",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 71,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-09-01 10:43:58",
      "expiresTime": "2024-10-01 10:43:58",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 71,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-09-01 10:43:58",
      "expiresTime": "2024-10-01 10:43:58",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 72,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-09-01 10:45:10",
      "expiresTime": "2024-10-01 10:45:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 72,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-09-01 10:45:10",
      "expiresTime": "2024-10-01 10:45:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» customerCardId|integer|true|none|购卡id|none|
|»» cardId|integer|true|none|卡id|none|
|»» cardName|string|true|none|卡名称|none|
|»» cardType|integer|true|none|卡分类|none|
|»» cardTypeDesc|string|true|none||none|
|»» cardSecondType|integer|true|none|卡二级分类|次卡|
|»» goodsType|integer|true|none|商品类型|1服务，2产品|
|»» goodsId|integer|true|none|商品id|none|
|»» goodsName|string|true|none|商品名|none|
|»» equity|integer|true|none|次卡表示数量，折扣充值卡表示折扣1.0-10.0|none|
|»» startTime|string|true|none|有效期开始|none|
|»» expiresTime|string|true|none|有效期结束|none|
|»» isLongTerm|integer|true|none|是否长期有效|none|
|»» expiresTimeDesc|string|true|none||none|
|»» countLimit|integer|true|none|共用次数上限|无限次通卡|
|»» amount|integer|true|none|充值卡支付金额|none|
|»» gift|integer|true|none|充值卡赠送金额|none|
|»» totalAmount|integer|true|none|储值卡总可用金额|none|
|»» isValid|integer|true|none|是否可用|none|
|»» reason|string|true|none|不可用原因|none|

## GET 下单时查询可用卡

GET /business/store-customer-card-match

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeCustomerId|query|number| 是 ||门店客户id|
|goodsId|query|string| 否 ||none|
|goodsType|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "customerCardId": 25,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:19:43",
      "expiresTime": "2024-09-23 17:19:43",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 25,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:19:43",
      "expiresTime": "2024-09-23 17:19:43",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 27,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:22:03",
      "expiresTime": "2024-09-23 17:22:03",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 27,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:22:03",
      "expiresTime": "2024-09-23 17:22:03",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 29,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:22:51",
      "expiresTime": "2024-09-23 17:22:51",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 29,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:22:51",
      "expiresTime": "2024-09-23 17:22:51",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 31,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:23:59",
      "expiresTime": "2024-09-23 17:23:59",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 31,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:23:59",
      "expiresTime": "2024-09-23 17:23:59",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 33,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:44:32",
      "expiresTime": "2024-09-23 17:44:32",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 33,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:44:32",
      "expiresTime": "2024-09-23 17:44:32",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 35,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 17:50:07",
      "expiresTime": "2024-09-23 17:50:07",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 35,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 17:50:07",
      "expiresTime": "2024-09-23 17:50:07",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 37,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 21:42:41",
      "expiresTime": "2024-09-23 21:42:41",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 37,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 21:42:41",
      "expiresTime": "2024-09-23 21:42:41",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 39,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 21:46:02",
      "expiresTime": "2024-09-23 21:46:02",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 39,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 21:46:02",
      "expiresTime": "2024-09-23 21:46:02",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 41,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 21:46:46",
      "expiresTime": "2024-09-23 21:46:46",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 41,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 21:46:46",
      "expiresTime": "2024-09-23 21:46:46",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 43,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 21:47:10",
      "expiresTime": "2024-09-23 21:47:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 43,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 21:47:10",
      "expiresTime": "2024-09-23 21:47:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 45,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-24 21:47:39",
      "expiresTime": "2024-09-23 21:47:39",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 45,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-24 21:47:39",
      "expiresTime": "2024-09-23 21:47:39",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/24-2024/09/23",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 47,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-25 11:46:42",
      "expiresTime": "2024-09-24 11:46:42",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/25-2024/09/24",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 47,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-25 11:46:42",
      "expiresTime": "2024-09-24 11:46:42",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/25-2024/09/24",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 49,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-26 20:41:33",
      "expiresTime": "2024-09-25 20:41:33",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/26-2024/09/25",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 49,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-26 20:41:33",
      "expiresTime": "2024-09-25 20:41:33",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/26-2024/09/25",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 51,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 20:44:14",
      "expiresTime": "2024-09-29 20:44:14",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 51,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 20:44:14",
      "expiresTime": "2024-09-29 20:44:14",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 53,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 20:55:19",
      "expiresTime": "2024-09-29 20:55:19",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 53,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 20:55:19",
      "expiresTime": "2024-09-29 20:55:19",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 55,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 20:58:26",
      "expiresTime": "2024-09-29 20:58:26",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 55,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 20:58:26",
      "expiresTime": "2024-09-29 20:58:26",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 57,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:18:29",
      "expiresTime": "2024-09-29 21:18:29",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 57,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:18:29",
      "expiresTime": "2024-09-29 21:18:29",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 59,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:23:09",
      "expiresTime": "2024-09-29 21:23:09",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 59,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:23:09",
      "expiresTime": "2024-09-29 21:23:09",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 61,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:27:50",
      "expiresTime": "2024-09-29 21:27:50",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 61,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:27:50",
      "expiresTime": "2024-09-29 21:27:50",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 63,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:29:27",
      "expiresTime": "2024-09-29 21:29:27",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 63,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:29:27",
      "expiresTime": "2024-09-29 21:29:27",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 65,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:30:10",
      "expiresTime": "2024-09-29 21:30:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 65,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:30:10",
      "expiresTime": "2024-09-29 21:30:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 67,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:53:58",
      "expiresTime": "2024-09-29 21:53:58",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 67,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:53:58",
      "expiresTime": "2024-09-29 21:53:58",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 69,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-08-30 21:54:02",
      "expiresTime": "2024-09-29 21:54:02",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 69,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-08-30 21:54:02",
      "expiresTime": "2024-09-29 21:54:02",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/08/30-2024/09/29",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 70,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-09-01 10:43:32",
      "expiresTime": "2024-10-01 10:43:32",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 70,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-09-01 10:43:32",
      "expiresTime": "2024-10-01 10:43:32",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 71,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-09-01 10:43:58",
      "expiresTime": "2024-10-01 10:43:58",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 71,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-09-01 10:43:58",
      "expiresTime": "2024-10-01 10:43:58",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 72,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 1,
      "goodsId": 4,
      "goodsName": "服务1",
      "equity": 10,
      "startTime": "2024-09-01 10:45:10",
      "expiresTime": "2024-10-01 10:45:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    },
    {
      "customerCardId": 72,
      "cardId": 4,
      "cardName": "次卡无限次卡",
      "cardType": 1,
      "cardTypeDesc": "次卡",
      "cardSecondType": 2,
      "goodsType": 2,
      "goodsId": 4,
      "goodsName": "产品2",
      "equity": 10,
      "startTime": "2024-09-01 10:45:10",
      "expiresTime": "2024-10-01 10:45:10",
      "isLongTerm": 0,
      "expiresTimeDesc": "2024/09/01-2024/10/01",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 1,
      "reason": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» customerCardId|integer|true|none|购卡id|none|
|»» cardId|integer|true|none|卡id|none|
|»» cardName|string|true|none|卡名称|none|
|»» cardType|integer|true|none|卡分类|none|
|»» cardTypeDesc|string|true|none||none|
|»» cardSecondType|integer|true|none|卡二级分类|次卡|
|»» goodsType|integer|true|none|商品类型|1服务，2产品|
|»» goodsId|integer|true|none|商品id|none|
|»» goodsName|string|true|none|商品名|none|
|»» equity|integer|true|none|次卡表示数量，折扣充值卡表示折扣1.0-10.0|none|
|»» startTime|string|true|none|有效期开始|none|
|»» expiresTime|string|true|none|有效期结束|none|
|»» isLongTerm|integer|true|none|是否长期有效|none|
|»» expiresTimeDesc|string|true|none||none|
|»» countLimit|integer|true|none|共用次数上限|无限次通卡|
|»» amount|integer|true|none|充值卡支付金额|none|
|»» gift|integer|true|none|充值卡赠送金额|none|
|»» totalAmount|integer|true|none|储值卡总可用金额|none|
|»» isValid|integer|true|none|是否可用|none|
|»» reason|string|true|none|不可用原因|none|

## GET 可用储值卡

GET /business/store-customer-value-card

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeCustomerId|query|number| 是 ||门店客户id|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "id": 16,
      "startTime": "2024-08-27 20:11:00",
      "expiresTime": "2024-11-27 20:11:00",
      "isLongTerm": 0,
      "createTime": "2024-08-04T18:54:10",
      "cardId": 7,
      "cardName": "新名字",
      "cardSecondType": 0,
      "cardType": 2,
      "amount": 200,
      "gift": 0,
      "totalAmount": 200
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|false|none|购卡id|none|
|»» startTime|string|false|none|有效期开始|none|
|»» expiresTime|string|false|none|有效期|none|
|»» isLongTerm|integer|false|none|是否长期有效|none|
|»» createTime|string|false|none||none|
|»» cardId|integer|false|none|卡id|none|
|»» cardName|string|false|none|卡名称|none|
|»» cardSecondType|integer|false|none|卡二级分类|次卡|
|»» cardType|integer|false|none|卡分类|none|
|»» amount|integer|false|none|充值金额|none|
|»» gift|integer|false|none|赠送金额|none|
|»» totalAmount|integer|false|none|可用总金额|none|

## GET 统计-员工统计

GET /business/stat-staff

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|string| 否 ||none|
|sDate|query|string| 否 ||none|
|eDate|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "orderCustomerCount": 0,
    "orderCardCustomerCount": 0,
    "orderServeCustomerCount": 0,
    "serveCustomerCount": 0,
    "serveCashAmount": 0,
    "serveDeductionCard": 0,
    "saleCustomerCount": 0,
    "saleCashAmount": 0,
    "saleDeductionCard": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» orderCustomerCount|integer|true|none||none|
|»» orderCardCustomerCount|integer|true|none||none|
|»» orderServeCustomerCount|integer|true|none||none|
|»» serveCustomerCount|integer|true|none||none|
|»» serveCashAmount|integer|true|none||none|
|»» serveDeductionCard|integer|true|none||none|
|»» saleCustomerCount|integer|true|none||none|
|»» saleCashAmount|integer|true|none||none|
|»» saleDeductionCard|integer|true|none||none|

## GET 查询门店所有商品

GET /business/goods_all

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|storeId|query|integer| 是 ||当前门店id，当前门店id|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "serviceCategory": [
      {
        "id": 3,
        "storeId": 28,
        "name": "服务分类1"
      },
      {
        "id": 4,
        "storeId": 28,
        "name": "服务分类2"
      },
      {
        "id": 5,
        "storeId": 28,
        "name": "服务分类3"
      }
    ],
    "serviceList": [
      {
        "id": 2,
        "storeId": 28,
        "name": "服务11",
        "categoryId": 3,
        "duration": 60,
        "durationUnit": "minute",
        "coverImg": "http://dummyimage.com/400x400",
        "price": 200,
        "price2": 20,
        "desc": "eiusmod enim",
        "isShow": 1,
        "payType": 1,
        "serviceColor": "#000000",
        "isToStore": 1,
        "isToDoor": 1,
        "categoryName": "服务分类1"
      },
      {
        "id": 3,
        "storeId": 28,
        "name": "服务22",
        "categoryId": 4,
        "duration": 60,
        "durationUnit": "minute",
        "coverImg": "http://dummyimage.com/400x400",
        "price": 200,
        "price2": 20,
        "desc": "eiusmod enim",
        "isShow": 1,
        "payType": 1,
        "serviceColor": "#000000",
        "isToStore": 1,
        "isToDoor": 1,
        "categoryName": "服务分类2"
      },
      {
        "id": 4,
        "storeId": 28,
        "name": "服务1",
        "categoryId": 3,
        "duration": 60,
        "durationUnit": "minute",
        "coverImg": "http://dummyimage.com/400x400",
        "price": 200,
        "price2": 20,
        "desc": "eiusmod enim",
        "isShow": 1,
        "payType": 1,
        "serviceColor": "#555555",
        "isToStore": 1,
        "isToDoor": 1,
        "categoryName": "服务分类1"
      },
      {
        "id": 5,
        "storeId": 28,
        "name": "服务2",
        "categoryId": 4,
        "duration": 60,
        "durationUnit": "minute",
        "coverImg": "http://dummyimage.com/400x400",
        "price": 200,
        "price2": 20,
        "desc": "eiusmod enim",
        "isShow": 1,
        "payType": 1,
        "serviceColor": "#555555",
        "isToStore": 1,
        "isToDoor": 1,
        "categoryName": "服务分类2"
      },
      {
        "id": 6,
        "storeId": 28,
        "name": "服务3",
        "categoryId": 5,
        "duration": 60,
        "durationUnit": "minute",
        "coverImg": "http://dummyimage.com/400x400",
        "price": 200,
        "price2": 20,
        "desc": "eiusmod enim",
        "isShow": 1,
        "payType": 1,
        "serviceColor": "#555555",
        "isToStore": 1,
        "isToDoor": 1,
        "categoryName": "服务分类3"
      }
    ],
    "productCategory": [
      {
        "id": 3,
        "storeId": 28,
        "name": "产品分类1"
      },
      {
        "id": 4,
        "storeId": 28,
        "name": "产品分类2"
      }
    ],
    "productList": [
      {
        "id": 2,
        "name": "产品1",
        "categoryId": 3,
        "unit": "套",
        "inventory": 100,
        "coverImg": "http://dummyimage.com/400x400",
        "price": 150,
        "price2": 100,
        "desc": "proident cillum consequat dolor",
        "isShow": 1,
        "storeId": 28,
        "categoryName": "产品分类1"
      },
      {
        "id": 3,
        "name": "产品1",
        "categoryId": 4,
        "unit": "套",
        "inventory": 100,
        "coverImg": "http://dummyimage.com/400x400",
        "price": 150,
        "price2": 100,
        "desc": "proident cillum consequat dolor",
        "isShow": 0,
        "storeId": 28,
        "categoryName": "产品分类2"
      },
      {
        "id": 4,
        "name": "产品2",
        "categoryId": 4,
        "unit": "套",
        "inventory": 100,
        "coverImg": "http://dummyimage.com/400x400",
        "price": 150,
        "price2": 100,
        "desc": "proident cillum consequat dolor",
        "isShow": 0,
        "storeId": 28,
        "categoryName": "产品分类2"
      },
      {
        "id": 5,
        "name": "产品4",
        "categoryId": 4,
        "unit": "套",
        "inventory": 98,
        "coverImg": "http://dummyimage.com/400x400",
        "price": 150,
        "price2": 100,
        "desc": "proident cillum consequat dolor",
        "isShow": 1,
        "storeId": 28,
        "categoryName": "产品分类2"
      }
    ],
    "cardCategory": [
      {
        "id": 3,
        "storeId": 28,
        "name": "ka分类1"
      },
      {
        "id": 4,
        "storeId": 28,
        "name": "ka分类1"
      }
    ],
    "cardList": [
      {
        "id": 3,
        "type": 1,
        "secondType": 1,
        "gift": 0,
        "name": "次卡有限次卡",
        "categoryId": 3,
        "price": 1000,
        "expires": 30,
        "countLimit": 0,
        "isShow": 1,
        "info": [
          {
            "cardId": 3,
            "serviceId": 4,
            "serviceName": "服务1",
            "productId": 0,
            "productName": "",
            "equity": 10,
            "price": 200,
            "price2": 20
          },
          {
            "cardId": 3,
            "serviceId": 0,
            "serviceName": "",
            "productId": 4,
            "productName": "产品2",
            "equity": 10,
            "price": 150,
            "price2": 100
          }
        ],
        "totalCount": 20,
        "discount": 0
      },
      {
        "id": 4,
        "type": 1,
        "secondType": 2,
        "gift": 0,
        "name": "次卡无限次卡",
        "categoryId": 3,
        "price": 1000,
        "expires": 30,
        "countLimit": 0,
        "isShow": 1,
        "info": [
          {
            "cardId": 4,
            "serviceId": 4,
            "serviceName": "服务1",
            "productId": 0,
            "productName": "",
            "equity": 10,
            "price": 200,
            "price2": 20
          },
          {
            "cardId": 4,
            "serviceId": 0,
            "serviceName": "",
            "productId": 4,
            "productName": "产品2",
            "equity": 10,
            "price": 150,
            "price2": 100
          }
        ],
        "totalCount": 20,
        "discount": 0
      },
      {
        "id": 5,
        "type": 1,
        "secondType": 3,
        "gift": 0,
        "name": "次卡通卡",
        "categoryId": 4,
        "price": 1000,
        "expires": 30,
        "countLimit": 0,
        "isShow": 1,
        "info": [
          {
            "cardId": 5,
            "serviceId": 4,
            "serviceName": "服务1",
            "productId": 0,
            "productName": "",
            "equity": 10,
            "price": 200,
            "price2": 20
          },
          {
            "cardId": 5,
            "serviceId": 0,
            "serviceName": "",
            "productId": 4,
            "productName": "产品2",
            "equity": 10,
            "price": 150,
            "price2": 100
          }
        ],
        "totalCount": 20,
        "discount": 0
      },
      {
        "id": 6,
        "type": 2,
        "secondType": 0,
        "gift": 100,
        "name": "充值卡5000",
        "categoryId": 4,
        "price": 5000,
        "expires": 30,
        "countLimit": 0,
        "isShow": 1,
        "info": [
          {
            "cardId": 6,
            "serviceId": 4,
            "serviceName": "服务1",
            "productId": 0,
            "productName": "",
            "equity": 80,
            "price": 200,
            "price2": 20
          },
          {
            "cardId": 6,
            "serviceId": 0,
            "serviceName": "",
            "productId": 4,
            "productName": "产品2",
            "equity": 80,
            "price": 150,
            "price2": 100
          }
        ],
        "totalCount": 0,
        "discount": 0
      },
      {
        "id": 7,
        "type": 2,
        "secondType": 0,
        "gift": 0,
        "name": "折扣卡8折",
        "categoryId": 4,
        "price": 200,
        "expires": 30,
        "countLimit": 0,
        "isShow": 1,
        "info": [
          {
            "cardId": 7,
            "serviceId": 4,
            "serviceName": "服务1",
            "productId": 0,
            "productName": "",
            "equity": 80,
            "price": 200,
            "price2": 20
          },
          {
            "cardId": 7,
            "serviceId": 0,
            "serviceName": "",
            "productId": 4,
            "productName": "产品2",
            "equity": 80,
            "price": 150,
            "price2": 100
          }
        ],
        "totalCount": 0,
        "discount": 0
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» serviceCategory|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» storeId|integer|true|none||none|
|»»» name|string|true|none||none|
|»» serviceList|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» storeId|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» categoryId|integer|true|none||none|
|»»» duration|integer|true|none||none|
|»»» durationUnit|string|true|none||none|
|»»» coverImg|string|true|none||none|
|»»» price|integer|true|none||none|
|»»» price2|integer|true|none||none|
|»»» desc|string|true|none||none|
|»»» isShow|integer|true|none||none|
|»»» payType|integer|true|none||none|
|»»» serviceColor|string|true|none||none|
|»»» isToStore|integer|true|none||none|
|»»» isToDoor|integer|true|none||none|
|»»» categoryName|string|true|none||none|
|»» productCategory|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» storeId|integer|true|none||none|
|»»» name|string|true|none||none|
|»» productList|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» categoryId|integer|true|none||none|
|»»» unit|string|true|none||none|
|»»» inventory|integer|true|none||none|
|»»» coverImg|string|true|none||none|
|»»» price|integer|true|none||none|
|»»» price2|integer|true|none||none|
|»»» desc|string|true|none||none|
|»»» isShow|integer|true|none||none|
|»»» storeId|integer|true|none||none|
|»»» categoryName|string|true|none||none|
|»» cardCategory|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» storeId|integer|true|none||none|
|»»» name|string|true|none||none|
|»» cardList|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» type|integer|true|none||none|
|»»» secondType|integer|true|none||none|
|»»» gift|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» categoryId|integer|true|none||none|
|»»» price|integer|true|none||none|
|»»» expires|integer|true|none||none|
|»»» countLimit|integer|true|none||none|
|»»» isShow|integer|true|none||none|
|»»» info|[object]|true|none||none|
|»»»» cardId|integer|true|none||none|
|»»»» serviceId|integer|true|none||none|
|»»»» serviceName|string|true|none||none|
|»»»» productId|integer|true|none||none|
|»»»» productName|string|true|none||none|
|»»»» equity|integer|true|none||none|
|»»»» price|integer|true|none||none|
|»»»» price2|integer|true|none||none|
|»»» totalCount|integer|true|none||none|
|»»» discount|integer|true|none||none|

## GET 获取角色权限

GET /business/store-role

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "roleCode": 1,
      "roleDesc": "店长",
      "menuList": [
        {
          "id": 1,
          "parentId": 0,
          "menuName": "workbench",
          "sortOrder": 0
        },
        {
          "id": 2,
          "parentId": 1,
          "menuName": "workbench-stat",
          "sortOrder": 0
        },
        {
          "id": 3,
          "parentId": 1,
          "menuName": "write-off",
          "sortOrder": 0
        },
        {
          "id": 4,
          "parentId": 1,
          "menuName": "customer-add",
          "sortOrder": 0
        },
        {
          "id": 5,
          "parentId": 1,
          "menuName": "booking-add",
          "sortOrder": 0
        },
        {
          "id": 6,
          "parentId": 1,
          "menuName": "billing",
          "sortOrder": 0
        },
        {
          "id": 7,
          "parentId": 1,
          "menuName": "order-list",
          "sortOrder": 0
        },
        {
          "id": 8,
          "parentId": 1,
          "menuName": "booking-list",
          "sortOrder": 0
        },
        {
          "id": 9,
          "parentId": 1,
          "menuName": "store",
          "sortOrder": 0
        },
        {
          "id": 10,
          "parentId": 1,
          "menuName": "card",
          "sortOrder": 0
        },
        {
          "id": 11,
          "parentId": 1,
          "menuName": "recommend",
          "sortOrder": 0
        },
        {
          "id": 12,
          "parentId": 0,
          "menuName": "booking",
          "sortOrder": 0
        },
        {
          "id": 13,
          "parentId": 0,
          "menuName": "customer",
          "sortOrder": 0
        },
        {
          "id": 14,
          "parentId": 0,
          "menuName": "my",
          "sortOrder": 0
        }
      ]
    },
    {
      "roleCode": 2,
      "roleDesc": "销售",
      "menuList": [
        {
          "id": 1,
          "parentId": 0,
          "menuName": "workbench",
          "sortOrder": 0
        },
        {
          "id": 2,
          "parentId": 1,
          "menuName": "workbench-stat",
          "sortOrder": 0
        },
        {
          "id": 3,
          "parentId": 1,
          "menuName": "write-off",
          "sortOrder": 0
        },
        {
          "id": 4,
          "parentId": 1,
          "menuName": "customer-add",
          "sortOrder": 0
        },
        {
          "id": 5,
          "parentId": 1,
          "menuName": "booking-add",
          "sortOrder": 0
        },
        {
          "id": 6,
          "parentId": 1,
          "menuName": "billing",
          "sortOrder": 0
        },
        {
          "id": 7,
          "parentId": 1,
          "menuName": "order-list",
          "sortOrder": 0
        },
        {
          "id": 8,
          "parentId": 1,
          "menuName": "booking-list",
          "sortOrder": 0
        },
        {
          "id": 9,
          "parentId": 1,
          "menuName": "store",
          "sortOrder": 0
        },
        {
          "id": 10,
          "parentId": 1,
          "menuName": "card",
          "sortOrder": 0
        },
        {
          "id": 11,
          "parentId": 1,
          "menuName": "recommend",
          "sortOrder": 0
        },
        {
          "id": 12,
          "parentId": 0,
          "menuName": "booking",
          "sortOrder": 0
        },
        {
          "id": 13,
          "parentId": 0,
          "menuName": "customer",
          "sortOrder": 0
        },
        {
          "id": 14,
          "parentId": 0,
          "menuName": "my",
          "sortOrder": 0
        }
      ]
    },
    {
      "roleCode": 3,
      "roleDesc": "手艺人",
      "menuList": [
        {
          "id": 1,
          "parentId": 0,
          "menuName": "workbench",
          "sortOrder": 0
        },
        {
          "id": 2,
          "parentId": 1,
          "menuName": "workbench-stat",
          "sortOrder": 0
        },
        {
          "id": 3,
          "parentId": 1,
          "menuName": "write-off",
          "sortOrder": 0
        },
        {
          "id": 4,
          "parentId": 1,
          "menuName": "customer-add",
          "sortOrder": 0
        },
        {
          "id": 5,
          "parentId": 1,
          "menuName": "booking-add",
          "sortOrder": 0
        },
        {
          "id": 6,
          "parentId": 1,
          "menuName": "billing",
          "sortOrder": 0
        },
        {
          "id": 7,
          "parentId": 1,
          "menuName": "order-list",
          "sortOrder": 0
        },
        {
          "id": 8,
          "parentId": 1,
          "menuName": "booking-list",
          "sortOrder": 0
        },
        {
          "id": 9,
          "parentId": 1,
          "menuName": "store",
          "sortOrder": 0
        },
        {
          "id": 10,
          "parentId": 1,
          "menuName": "card",
          "sortOrder": 0
        },
        {
          "id": 11,
          "parentId": 1,
          "menuName": "recommend",
          "sortOrder": 0
        },
        {
          "id": 12,
          "parentId": 0,
          "menuName": "booking",
          "sortOrder": 0
        },
        {
          "id": 13,
          "parentId": 0,
          "menuName": "customer",
          "sortOrder": 0
        },
        {
          "id": 14,
          "parentId": 0,
          "menuName": "my",
          "sortOrder": 0
        }
      ]
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» roleCode|integer|true|none||none|
|»» roleDesc|string|true|none||none|
|»» menuList|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» parentId|integer|true|none||none|
|»»» menuName|string|true|none|名字标识|none|
|»»» sortOrder|integer|true|none||none|

## POST 待支付订单支付

POST /business/order/pay

> Body 请求参数

```json
{
  "orderId": 58,
  "payType": 1,
  "customerCardId": null
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» orderId|body|integer| 是 | 订单id|none|
|» payType|body|integer| 是 | 支付类型|none|
|» customerCardId|body|integer| 是 | 购卡id|储值卡支付|

> 返回示例

> 200 Response

```json
{
  "msg": "string",
  "code": 0,
  "data": {
    "gainIntegral": 0,
    "orderId": 0,
    "payAmount": 0,
    "payStatus": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» gainIntegral|integer|true|none|获取到的积分|none|
|»» orderId|integer|true|none|订单id|none|
|»» payAmount|integer|true|none|付款金额|none|
|»» payStatus|integer|true|none|付款状态|none|

## GET 获取意见反馈分类列表

GET /business/suggestion/category

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "id": 1,
      "name": "设置服务/产品/卡项/员工保存失败",
      "clientType": 0,
      "createTime": null,
      "createBy": 0
    },
    {
      "id": 2,
      "name": "权限问题",
      "clientType": 0,
      "createTime": null,
      "createBy": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» clientType|integer|true|none||none|
|»» createTime|null|true|none||none|
|»» createBy|integer|true|none||none|

## POST 创建意见反馈

POST /business/suggestion

> Body 请求参数

```json
{
  "version": "1.1",
  "categoryId": 1,
  "clientType": 2,
  "content": "反馈内容",
  "contact": "联系方式",
  "imgs": ""
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» version|body|string| 是 | 小程序版本号|none|
|» categoryId|body|integer| 是 | 分类|none|
|» clientType|body|integer| 是 | 1客户创建，2商家|none|
|» content|body|string| 是 | 反馈内容必填|none|
|» contact|body|string| 否 | 联系方式|none|
|» imgs|body|string| 是 | 地址逗号分隔|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "id": 1,
      "name": "设置服务/产品/卡项/员工保存失败",
      "clientType": 0,
      "createTime": null,
      "createBy": 0
    },
    {
      "id": 2,
      "name": "权限问题",
      "clientType": 0,
      "createTime": null,
      "createBy": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» clientType|integer|true|none||none|
|»» createTime|null|true|none||none|
|»» createBy|integer|true|none||none|

# 平台管理端

## POST 平台关联微信登录

POST /admin/wx-login

> Body 请求参数

```json
{
  "code": "0a1fqW0w3PIme336EK2w3EVeyL2fqW0B"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» code|body|string| 是 | 授权cod|none|

> 返回示例

```json
{
  "msg": "ok",
  "code": 200,
  "data": {
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbklkIjoiYzI0ZmQ0NTItMGMxMy00MWE3LWE3ZTEtMGU4N2JhYzUwNGRjIiwib3BlbmlkIjoib3BlbmlkIiwiYnVzaW5lc3NJZCI6MywidXNlclR5cGUiOiJidXNpbmVzcyJ9.ATtODvS61B_i1H4ghVnxlfP0HdC8rBWps0vRtIgM6UvHplmPlpAK0B7PfSQGlgYzIoWREU-ZBiT0JdWQ0mKiJg",
    "isRegister": 1
  }
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» token|string|true|none||none|
|»» isRegister|integer|true|none|是否已经存在注册信息|0未注册需要完善信息，此时token为临时token，完善信息后会返回新的token|

## GET 提现详情

GET /admin/store-withdraw/{id}

> Body 请求参数

```json
""
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||提现id|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "withdrawId": 2,
    "orgId": 4,
    "storeId": 28,
    "amount": 100,
    "createTime": "2024-08-13 22:23:16",
    "finishTime": null,
    "status": 1,
    "statusDesc": "待处理",
    "type": 1,
    "typeDesc": "银行卡",
    "withdrawNo": "1823364702984040448",
    "inspectRemark": 1,
    "inspectRemarkDesc": "待审核",
    "inspectTime": null,
    "overruleReason": "",
    "storeName": "5门店1",
    "storePhone": "18187475864",
    "settlementBankAccountName": "招商银行",
    "settlementBankAccountNum": "151545513215",
    "settlementBankBranchName": "科技园支行"
  }
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» withdrawId|integer|true|none|提现id|none|
|»» orgId|integer|true|none|组织id|none|
|»» storeId|integer|true|none|门店id|none|
|»» amount|integer|true|none|金额|none|
|»» createTime|string|true|none|创建时间|none|
|»» finishTime|null|true|none|完成时间|none|
|»» status|integer|true|none|状态|none|
|»» statusDesc|string|true|none|状态描述|none|
|»» type|integer|true|none|类型|none|
|»» typeDesc|string|true|none|类型描述|none|
|»» withdrawNo|string|true|none|提现编号|none|
|»» inspectRemark|integer|true|none|审核状态|none|
|»» inspectRemarkDesc|string|true|none|审核状态描述|none|
|»» inspectTime|null|true|none|审核时间|none|
|»» overruleReason|string|true|none|驳回原因|none|
|»» storeName|string|true|none|门店名|none|
|»» storePhone|string|true|none|门店电话|none|
|»» settlementBankAccountName|string|true|none|银行卡银行|none|
|»» settlementBankAccountNum|string|true|none|银行卡号|none|
|»» settlementBankBranchName|string|true|none|银行支行名|none|

## GET 门店列表

GET /admin/store

> Body 请求参数

```json
""
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|keyword|query|string| 否 ||none|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 6,
    "list": [
      {
        "id": 1,
        "orgId": 1,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/daf99692-0742-4d69-9f1e-79a692494764.jpg",
        "storeName": "金沙江电池旗舰店",
        "phone": "17512054854",
        "address": "观潮路777号",
        "desc": "最好的门店",
        "status": 1,
        "totalAmount": 4799.9,
        "platformAmount": 0,
        "frozenWithdraw": 0,
        "withdrawAmount": 0,
        "createTime": "2025-02-08 08:22:10",
        "createBy": 1,
        "updateBy": 1,
        "updateTime": "2025-02-11T08:02:25",
        "province": "320000",
        "city": "321000",
        "county": "321002",
        "locationX": "",
        "locationY": "",
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00",
        "toDoorWeek": null,
        "toDoorStime": "09:00:00",
        "toDoorEtime": "21:00:00",
        "bookingDuration": 15,
        "storeCount": null,
        "productCount": 0,
        "serviceCount": 2,
        "cardCount": 5,
        "staffCount": 1,
        "adminId": 1,
        "expiresTime": "2025-05-09 08:20:59",
        "userName": "晚风",
        "userPhone": "17512054854"
      },
      {
        "id": 2,
        "orgId": 2,
        "logo": "",
        "storeName": "wj的美妆店",
        "phone": "15810746007",
        "address": "前门100号",
        "desc": "",
        "status": 1,
        "totalAmount": 4799.9,
        "platformAmount": 0,
        "frozenWithdraw": 0,
        "withdrawAmount": 0,
        "createTime": "2025-02-08 11:00:03",
        "createBy": 2,
        "updateBy": 0,
        "updateTime": null,
        "province": "110000",
        "city": "110100",
        "county": "110101",
        "locationX": "",
        "locationY": "",
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00",
        "toDoorWeek": null,
        "toDoorStime": "09:00:00",
        "toDoorEtime": "21:00:00",
        "bookingDuration": 15,
        "storeCount": null,
        "productCount": 1,
        "serviceCount": 2,
        "cardCount": 3,
        "staffCount": 0,
        "adminId": 2,
        "expiresTime": "2025-03-10 10:59:32",
        "userName": "wj的美妆店",
        "userPhone": "15810746007"
      },
      {
        "id": 3,
        "orgId": 3,
        "logo": "",
        "storeName": "hailey美容护肤",
        "phone": "18911797527",
        "address": "108号",
        "desc": "我们从未懈怠",
        "status": 1,
        "totalAmount": 4799.9,
        "platformAmount": 0,
        "frozenWithdraw": 0,
        "withdrawAmount": 0,
        "createTime": "2025-02-10 10:50:56",
        "createBy": 3,
        "updateBy": 3,
        "updateTime": "2025-02-15T11:27:25",
        "province": "370000",
        "city": "370200",
        "county": "370203",
        "locationX": "",
        "locationY": "",
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00",
        "toDoorWeek": null,
        "toDoorStime": "09:00:00",
        "toDoorEtime": "21:00:00",
        "bookingDuration": 15,
        "storeCount": null,
        "productCount": 1,
        "serviceCount": 2,
        "cardCount": 4,
        "staffCount": 1,
        "adminId": 3,
        "expiresTime": "2025-03-12 10:47:08",
        "userName": "石榴",
        "userPhone": "18911797527"
      },
      {
        "id": 4,
        "orgId": 4,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/20d82b74-96f4-4732-91ba-2a2eb3ba3a5a.jpg",
        "storeName": "武陵源",
        "phone": "13693328797",
        "address": "111",
        "desc": "",
        "status": 1,
        "totalAmount": 4799.9,
        "platformAmount": 0,
        "frozenWithdraw": 0,
        "withdrawAmount": 0,
        "createTime": "2025-02-11 18:01:17",
        "createBy": 4,
        "updateBy": 4,
        "updateTime": "2025-02-14T22:22:32",
        "province": "370000",
        "city": "370200",
        "county": "370203",
        "locationX": "",
        "locationY": "",
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00",
        "toDoorWeek": null,
        "toDoorStime": "09:00:00",
        "toDoorEtime": "21:00:00",
        "bookingDuration": 15,
        "storeCount": null,
        "productCount": 3,
        "serviceCount": 1,
        "cardCount": 5,
        "staffCount": 1,
        "adminId": 4,
        "expiresTime": "2025-03-13 18:00:22",
        "userName": "许大勋",
        "userPhone": "13693328797"
      },
      {
        "id": 5,
        "orgId": 5,
        "logo": "",
        "storeName": "王健的店",
        "phone": "15192176273",
        "address": "前门201号",
        "desc": "",
        "status": 1,
        "totalAmount": 4799.9,
        "platformAmount": 0,
        "frozenWithdraw": 0,
        "withdrawAmount": 0,
        "createTime": "2025-02-12 22:55:14",
        "createBy": 5,
        "updateBy": 0,
        "updateTime": null,
        "province": "110000",
        "city": "110100",
        "county": "110101",
        "locationX": "",
        "locationY": "",
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00",
        "toDoorWeek": null,
        "toDoorStime": "09:00:00",
        "toDoorEtime": "21:00:00",
        "bookingDuration": 15,
        "storeCount": null,
        "productCount": 0,
        "serviceCount": 0,
        "cardCount": 0,
        "staffCount": 0,
        "adminId": 5,
        "expiresTime": "2025-06-12 22:54:48",
        "userName": "王健",
        "userPhone": "15192176273"
      },
      {
        "id": 6,
        "orgId": 7,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/22bb3376-9e87-46b5-a16a-22ffa90a1af7.jpg",
        "storeName": "hailey美容美发美甲",
        "phone": "18554957527",
        "address": "1121",
        "desc": "一起进步",
        "status": 1,
        "totalAmount": 4799.9,
        "platformAmount": 0,
        "frozenWithdraw": 0,
        "withdrawAmount": 0,
        "createTime": "2025-02-13 12:22:02",
        "createBy": 7,
        "updateBy": 0,
        "updateTime": null,
        "province": "370000",
        "city": "370200",
        "county": "370202",
        "locationX": "",
        "locationY": "",
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00",
        "toDoorWeek": null,
        "toDoorStime": "09:00:00",
        "toDoorEtime": "21:00:00",
        "bookingDuration": 15,
        "storeCount": null,
        "productCount": 0,
        "serviceCount": 0,
        "cardCount": 0,
        "staffCount": 0,
        "adminId": 7,
        "expiresTime": "2025-03-15 12:16:04",
        "userName": "hailey",
        "userPhone": "18554957527"
      }
    ]
  }
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none|门店id|none|
|»»» orgId|integer|true|none||none|
|»»» logo|string|true|none||none|
|»»» storeName|string|true|none||none|
|»»» phone|string|true|none|门店联系电话|none|
|»»» address|string|true|none|门店地址|none|
|»»» desc|string|true|none|简介|none|
|»»» status|integer|true|none|状态|1->营业中，2->停业|
|»»» totalAmount|number|true|none|累计收入|none|
|»»» platformAmount|integer|true|none|可提现余额|none|
|»»» frozenWithdraw|integer|true|none||none|
|»»» withdrawAmount|integer|true|none||none|
|»»» createTime|string|true|none||none|
|»»» createBy|integer|true|none||none|
|»»» updateBy|integer|true|none||none|
|»»» updateTime|string¦null|true|none||none|
|»»» province|string|true|none|省|none|
|»»» city|string|true|none|市|none|
|»»» county|string|true|none|区|none|
|»»» locationX|string|true|none||none|
|»»» locationY|string|true|none||none|
|»»» workWeek|null|true|none||none|
|»»» workStime|string|true|none||none|
|»»» workEtime|string|true|none||none|
|»»» toDoorWeek|null|true|none||none|
|»»» toDoorStime|string|true|none||none|
|»»» toDoorEtime|string|true|none||none|
|»»» bookingDuration|integer|true|none||none|
|»»» storeCount|integer|true|none||none|
|»»» productCount|integer|true|none|产品数量|none|
|»»» serviceCount|integer|true|none|服务数量|none|
|»»» cardCount|integer|true|none|卡数量|none|
|»»» staffCount|integer|true|none|员工数量|none|
|»»» adminId|integer|true|none|店主id|none|
|»»» expiresTime|string|true|none|过期时间|none|
|»»» expiresTimeDays|integer|true|none||none|
|»»» userName|string|true|none|店主名|none|
|»»» userPhone|string|true|none|店主手机号|none|
|»»» customerCount|integer|true|none|客户数|none|
|»»» vipCustomerCount|integer|true|none|vip客户数|none|
|»»» customerCardCount|integer|true|none|客户购卡数|none|
|»»» bookingCount|integer|true|none|预约数|none|
|»»» orderCount|integer|true|none|订单数|none|

## POST 提现打款

POST /admin/store-withdraw-check

> Body 请求参数

```json
""
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» withdrawId|body|integer| 是 | 提现id|none|
|» proof|body|string| 是 | 凭证|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "withdrawId": 2,
    "orgId": 4,
    "storeId": 28,
    "amount": 100,
    "createTime": "2024-08-13 22:23:16",
    "finishTime": null,
    "status": 1,
    "statusDesc": "待处理",
    "type": 1,
    "typeDesc": "银行卡",
    "withdrawNo": "1823364702984040448",
    "inspectRemark": 1,
    "inspectRemarkDesc": "待审核",
    "inspectTime": null,
    "overruleReason": "",
    "storeName": "5门店1",
    "storePhone": "18187475864",
    "settlementBankAccountName": "招商银行",
    "settlementBankAccountNum": "151545513215",
    "settlementBankBranchName": "科技园支行"
  }
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» withdrawId|integer|true|none||none|
|»» orgId|integer|true|none||none|
|»» storeId|integer|true|none||none|
|»» amount|integer|true|none||none|
|»» createTime|string|true|none||none|
|»» finishTime|null|true|none||none|
|»» status|integer|true|none||none|
|»» statusDesc|string|true|none||none|
|»» type|integer|true|none||none|
|»» typeDesc|string|true|none||none|
|»» withdrawNo|string|true|none||none|
|»» inspectRemark|integer|true|none||none|
|»» inspectRemarkDesc|string|true|none||none|
|»» inspectTime|null|true|none||none|
|»» overruleReason|string|true|none||none|
|»» storeName|string|true|none||none|
|»» storePhone|string|true|none||none|
|»» settlementBankAccountName|string|true|none||none|
|»» settlementBankAccountNum|string|true|none||none|
|»» settlementBankBranchName|string|true|none||none|

## POST 手动刷新统计

POST /admin/store-report

> Body 请求参数

```json
{
  "storeId": 15,
  "type": 2
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|B-Store-Id|header|integer| 否 ||商家端当前门店id|
|envVersion|header|string| 否 ||小程序环境变量|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» withdrawId|body|integer| 是 | 提现id|none|
|» proof|body|string| 是 | 凭证|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

# 客户端

## GET 根据token查询客户信息customer

GET /customer/info

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|

> 返回示例

```json
{
  "msg": "ok",
  "code": 200,
  "data": {
    "id": 1,
    "createTime": "2025-02-09 14:43:59",
    "updateTime": null,
    "name": "王健",
    "phone": "",
    "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKlYbeHSBI5f7UCYDNlicVOfZCtfLHWbg9LhRXZcCBt79oIs8yLhl4c7viba9mevXk9Caa8iaibOpP6icQ/132",
    "birthday": null,
    "gender": 0,
    "loginDate": "2025-02-09 14:43:59",
    "status": 1,
    "address": "",
    "lastStoreId": 0,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbklkIjoiYzEwNmM3YjQtYmMzNi00MWQxLWFkOGQtODg3ZWJiOTQ5ZjBiIiwib3BlbmlkIjoib3BwVXU2MFR1RFpNMGFWYUVNWkNIQ3JuV2VDNCIsInVzZXJUeXBlIjoiY3VzdG9tZXIiLCJ1c2VySWQiOjF9.AgKk_bpI39BHyPFRFfJkfwHRV33f7CJCHDCaB72XNCU"
  }
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none|客户id|customerId|
|»» createTime|string|true|none||none|
|»» updateTime|string¦null|true|none||none|
|»» name|string|true|none|昵称|获取微信昵称|
|»» phone|string|true|none|手机号|未完善信息的为空|
|»» avatar|string|true|none|头像url|none|
|»» birthday|string¦null|true|none|生日|none|
|»» gender|integer|true|none|性别|none|
|»» loginDate|string|true|none|最近登录时间|none|
|»» status|integer|true|none|状态|1->正常，2->禁用，目前无判断|
|»» address|string|true|none|地址|none|
|»» lastStoreId|number|true|none|最后进入的门店id|none|
|»» token|string|true|none|登录凭证|none|

## POST 完善信息，修改个人信息

POST /customer/info

> Body 请求参数

```json
{
  "name": "",
  "phone": "15192176273",
  "birthday": "",
  "gender": null,
  "address": ""
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» name|body|string| 是 | 姓名|none|
|» phone|body|string| 是 | 手机号|none|
|» birthday|body|string| 是 | 生日|none|
|» gender|body|string| 是 | 性别|0->未知；1->男；2->女|
|» address|body|string| 是 | 地址|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 客户端公众号登录

POST /customer/wx-login

> Body 请求参数

```json
{
  "code": "011mPRkl26Z88f4LNOll2UlxQI1mPRkj"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» code|body|string| 是 | 授权cod|none|

> 返回示例

```json
{
  "msg": "ok",
  "code": 200,
  "data": {
    "id": 1,
    "createTime": "2025-02-09 14:43:59",
    "updateTime": null,
    "name": "王健",
    "phone": null,
    "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKlYbeHSBI5f7UCYDNlicVOfZCtfLHWbg9LhRXZcCBt79oIs8yLhl4c7viba9mevXk9Caa8iaibOpP6icQ/132",
    "birthday": null,
    "gender": null,
    "loginDate": "2025-02-09 14:43:59",
    "status": null,
    "address": null,
    "lastStoreId": null,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbklkIjoiYzEwNmM3YjQtYmMzNi00MWQxLWFkOGQtODg3ZWJiOTQ5ZjBiIiwib3BlbmlkIjoib3BwVXU2MFR1RFpNMGFWYUVNWkNIQ3JuV2VDNCIsInVzZXJUeXBlIjoiY3VzdG9tZXIiLCJ1c2VySWQiOjF9.AgKk_bpI39BHyPFRFfJkfwHRV33f7CJCHDCaB72XNCU"
  }
}
```

```json
null
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|string|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none|客户id|customerId|
|»» createTime|string|true|none||none|
|»» updateTime|null|true|none||none|
|»» name|string|true|none|昵称|获取微信昵称|
|»» phone|null|true|none|手机号|未完善信息的为空|
|»» avatar|string|true|none|头像url|none|
|»» birthday|string|true|none|生日|none|
|»» gender|integer|true|none|性别|none|
|»» loginDate|string|true|none|最近登录时间|none|
|»» status|integer|true|none|状态|1->正常，2->禁用，目前无判断|
|»» address|string|true|none|地址|none|
|»» lastStoreId|string|true|none|最后进入的门店id|none|
|»» token|string|true|none|登录凭证|none|

## GET 所有店铺列表

GET /customer/store-list-all

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|province|query|string| 否 ||省|
|city|query|string| 否 ||市|
|county|query|string| 否 ||区|
|pageSize|query|string| 否 ||none|
|pageNum|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 12,
    "list": [
      {
        "id": 1,
        "orgId": 1,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/79840193-8eb6-4b09-9cc7-1dd215922c0b.jpg",
        "storeName": "syx测试门店",
        "phone": "17512054854",
        "address": "观潮路117号",
        "desc": "xxxxxxx",
        "status": 1,
        "workWeek": [
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "workStime": "08:00:00",
        "workEtime": "21:00:00"
      },
      {
        "id": 3,
        "orgId": 14,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/58883566-6fc3-409e-a83a-c12b50135f19.jpg",
        "storeName": "钟馗的店",
        "phone": "15192176273",
        "address": "悦府",
        "desc": "钟馗家的店",
        "status": 1,
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00"
      },
      {
        "id": 4,
        "orgId": 17,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/5b8a4cf9-00b2-4fd5-88ab-b144cf41fd46.png",
        "storeName": "大勋的店",
        "phone": "13693328797",
        "address": "瑞昌路 201 号",
        "desc": "",
        "status": 1,
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00"
      },
      {
        "id": 7,
        "orgId": 20,
        "logo": "",
        "storeName": "6007的店",
        "phone": "15810746007",
        "address": "经十路5万号",
        "desc": "",
        "status": 1,
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00"
      },
      {
        "id": 9,
        "orgId": 22,
        "logo": "",
        "storeName": "6007的店",
        "phone": "15810746007",
        "address": "一号院",
        "desc": "",
        "status": 1,
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00"
      },
      {
        "id": 10,
        "orgId": 23,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/a8e261ea-efdf-4e29-aba3-052c296b834b.jpg",
        "storeName": "诺一的小店",
        "phone": "13263301397",
        "address": "绿地中心 A 座 2002",
        "desc": "",
        "status": 1,
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00"
      },
      {
        "id": 11,
        "orgId": 24,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/6cd87a03-400f-4097-9ff2-dfaa1123e419.jpg",
        "storeName": "新一波潮流护理",
        "phone": "13693328797",
        "address": "123",
        "desc": "",
        "status": 1,
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00"
      },
      {
        "id": 12,
        "orgId": 25,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/850aa263-b076-4b07-a85a-cd679a810be4.jpg",
        "storeName": "王者荣耀",
        "phone": "15810746007",
        "address": "南锣鼓巷",
        "desc": "",
        "status": 1,
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00"
      },
      {
        "id": 15,
        "orgId": 26,
        "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/d0ce88e0-a884-4798-b93d-a676eeab2dcf.jpg",
        "storeName": "hailey皮肤管理",
        "phone": "18911797527",
        "address": "瑞昌路腊八123号",
        "desc": "精细化服务与体验",
        "status": 1,
        "workWeek": [
          1,
          2,
          3,
          4,
          5
        ],
        "workStime": "09:00:00",
        "workEtime": "20:00:00"
      },
      {
        "id": 16,
        "orgId": 27,
        "logo": "",
        "storeName": "橙子皮肤管理中心",
        "phone": "18911797526",
        "address": "祥云小区",
        "desc": "",
        "status": 1,
        "workWeek": null,
        "workStime": "09:00:00",
        "workEtime": "21:00:00"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none|门店id|storeId|
|»»» orgId|integer|true|none||none|
|»»» logo|string|true|none|门店logo|none|
|»»» storeName|string|true|none|门店名称|none|
|»»» phone|string|true|none|联系方式|none|
|»»» address|string|true|none|地址|none|
|»»» desc|string|true|none|简介|none|
|»»» status|integer|true|none|状态|1->营业中，2->停业；目前没有关店状态|
|»»» workWeek|[integer]¦null|true|none|营业时间|none|
|»»» workStime|string|true|none|营业时间|none|
|»»» workEtime|string|true|none|营业时间|none|

## GET 我加入的店铺列表

GET /customer/store-list-join

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|pageNum|query|string| 否 ||none|
|pageSize|query|string| 否 ||none|
|province|query|string| 否 ||省|
|city|query|string| 否 ||市|
|county|query|string| 否 ||区|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "msg": "string",
  "code": 0,
  "data": {
    "total": 0,
    "list": [
      {
        "id": 0,
        "orgId": 0,
        "logo": "string",
        "storeName": "string",
        "phone": "string",
        "address": "string",
        "desc": "string",
        "status": 0,
        "workWeek": [
          0
        ],
        "workStime": "string",
        "workEtime": "string"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none|门店id|storeId|
|»»» orgId|integer|true|none||none|
|»»» logo|string|true|none|门店logo|none|
|»»» storeName|string|true|none|门店名称|none|
|»»» phone|string|true|none|联系方式|none|
|»»» address|string|true|none|地址|none|
|»»» desc|string|true|none|简介|none|
|»»» status|integer|true|none|状态|1->营业中，2->停业；目前没有关店状态|
|»»» workWeek|[integer]¦null|true|none|营业时间|none|
|»»» workStime|string|true|none|营业时间|none|
|»»» workEtime|string|true|none|营业时间|none|

## GET 查询店铺信息

GET /customer/store/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "id": 1,
    "orgId": 1,
    "logo": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/daf99692-0742-4d69-9f1e-79a692494764.jpg",
    "storeName": "金沙江电池旗舰店",
    "phone": "17512054854",
    "address": "观潮路777号",
    "desc": "最好的门店",
    "status": 1,
    "statusDesc": "营业中",
    "createTime": "2025-02-08 08:22:10",
    "province": "320000",
    "city": "321000",
    "county": "321002",
    "locationX": "",
    "locationY": "",
    "workWeek": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "workStime": "09:00:00",
    "workEtime": "21:00:00",
    "toDoorWeek": null,
    "toDoorStime": "09:00:00",
    "toDoorEtime": "21:00:00",
    "bookingDuration": 15
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none|门店id|none|
|»» orgId|integer|true|none||none|
|»» logo|string|true|none||none|
|»» storeName|string|true|none|门店名|none|
|»» phone|string|true|none|门店联系电话|none|
|»» address|string|true|none|门店地址|none|
|»» desc|string|true|none|门店简介|none|
|»» status|integer|true|none|门店状态，1->营业中，2->停业|门店状态，1->营业中，2->停业|
|»» statusDesc|string|true|none||none|
|»» createTime|string|true|none|门店创建时间|none|
|»» province|string|true|none|省|none|
|»» city|string|true|none|市|none|
|»» county|string|true|none|区|none|
|»» locationX|string|true|none|坐标|none|
|»» locationY|string|true|none|坐标|none|
|»» workWeek|[integer]|true|none|工作时间|none|
|»» workStime|string|true|none||none|
|»» workEtime|string|true|none||none|
|»» toDoorWeek|null|true|none|上门时间|none|
|»» toDoorStime|string|true|none||none|
|»» toDoorEtime|string|true|none||none|
|»» bookingDuration|integer|true|none|预约时长|none|

## POST 进入店铺-记录一条记录

POST /customer/store-join/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## POST 上报当前门店

POST /customer/current-store-id/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|null|true|none||none|

## GET 查询店铺商品

GET /customer/store-goods-all

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "serviceCategory": [
      {
        "id": 1,
        "storeId": 2,
        "name": "美甲"
      }
    ],
    "serviceList": [
      {
        "id": 7,
        "storeId": 2,
        "name": "护理",
        "categoryId": 1,
        "duration": 30,
        "durationUnit": "minute",
        "coverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/e03eb77d-8f93-4392-b3bb-afd9f4e0d0a5.jpg",
        "price": 100,
        "price2": null,
        "desc": "",
        "isShow": 1,
        "payType": 1,
        "serviceColor": "#EC5428",
        "isToStore": 1,
        "isToDoor": 0,
        "categoryName": "美甲"
      },
      {
        "id": 1,
        "storeId": 2,
        "name": "美甲",
        "categoryId": 1,
        "duration": 45,
        "durationUnit": "minute",
        "coverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/2367cd78-fa93-4fb3-97a2-a58a359ce832.jpg",
        "price": 100,
        "price2": null,
        "desc": "",
        "isShow": 1,
        "payType": 1,
        "serviceColor": "#EC5428",
        "isToStore": 1,
        "isToDoor": 0,
        "categoryName": "美甲"
      }
    ],
    "productCategory": [
      {
        "id": 1,
        "storeId": 2,
        "name": "美妆"
      }
    ],
    "productList": [
      {
        "id": 1,
        "name": "卸妆油",
        "categoryId": 1,
        "unit": "盒",
        "inventory": 100,
        "coverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/0a489f75-a2e3-411f-92b9-15eddb48771a.jpg",
        "price": 50,
        "price2": null,
        "desc": "",
        "isShow": 1,
        "storeId": 2,
        "categoryName": "美妆"
      }
    ],
    "cardCategory": [
      {
        "id": 2,
        "storeId": 2,
        "name": "次卡"
      },
      {
        "id": 1,
        "storeId": 2,
        "name": "储值卡分类"
      }
    ],
    "cardList": [
      {
        "id": 16,
        "type": 1,
        "secondType": 3,
        "gift": 0,
        "name": "通卡",
        "categoryId": 2,
        "categoryName": "次卡",
        "price": 1000,
        "expires": 365,
        "countLimit": 10,
        "isShow": 1,
        "info": [
          {
            "cardId": 16,
            "serviceId": 1,
            "serviceName": "美甲",
            "productId": 0,
            "productName": "",
            "equity": 0,
            "price": 100,
            "price2": null
          }
        ],
        "totalCount": 0,
        "discount": 0,
        "discountDesc": ""
      },
      {
        "id": 2,
        "type": 1,
        "secondType": 1,
        "gift": 0,
        "name": "有限次卡3次",
        "categoryId": 2,
        "categoryName": "次卡",
        "price": 200,
        "expires": 365,
        "countLimit": 6,
        "isShow": 1,
        "info": [
          {
            "cardId": 2,
            "serviceId": 1,
            "serviceName": "美甲",
            "productId": 0,
            "productName": "",
            "equity": 3,
            "price": 100,
            "price2": null
          },
          {
            "cardId": 2,
            "serviceId": 7,
            "serviceName": "护理",
            "productId": 0,
            "productName": "",
            "equity": 3,
            "price": 100,
            "price2": null
          }
        ],
        "totalCount": 6,
        "discount": 0,
        "discountDesc": ""
      },
      {
        "id": 1,
        "type": 2,
        "secondType": 0,
        "gift": 100,
        "name": "1000赠100",
        "categoryId": 1,
        "categoryName": "储值卡分类",
        "price": 1000,
        "expires": 365,
        "countLimit": 0,
        "isShow": 1,
        "info": [
          {
            "cardId": 1,
            "serviceId": 1,
            "serviceName": "美甲",
            "productId": 0,
            "productName": "",
            "equity": 10,
            "price": 100,
            "price2": null
          },
          {
            "cardId": 1,
            "serviceId": 0,
            "serviceName": "",
            "productId": 1,
            "productName": "卸妆油",
            "equity": 10,
            "price": 50,
            "price2": null
          }
        ],
        "totalCount": 0,
        "discount": 0,
        "discountDesc": ""
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» serviceCategory|[object]|true|none|服务分类|none|
|»»» id|integer|false|none||none|
|»»» storeId|integer|false|none||none|
|»»» name|string|false|none||none|
|»» serviceList|[object]|true|none|服务|none|
|»»» id|integer|true|none||none|
|»»» storeId|integer|true|none|门店id|none|
|»»» name|string|true|none|服务名称|none|
|»»» categoryId|integer|true|none|分类id|none|
|»»» duration|integer|true|none|时长|none|
|»»» durationUnit|string|true|none|时长单位|hour小时，minute分钟|
|»»» coverImg|string|true|none|缩略图|none|
|»»» price|integer|true|none|原价|none|
|»»» price2|null|true|none|优惠价|none|
|»»» desc|string|true|none|描述|none|
|»»» isShow|integer|true|none|是否网店展示|none|
|»»» payType|integer|true|none|线上预约时是否需要支付，1全款，2无需付款|none|
|»»» serviceColor|string|true|none||none|
|»»» isToStore|integer|true|none|是否支持到店|none|
|»»» isToDoor|integer|true|none|是否支持上门|none|
|»»» categoryName|string|true|none|分类名|none|
|»» productCategory|[object]|true|none|产品分类|none|
|»»» id|integer|false|none||none|
|»»» storeId|integer|false|none||none|
|»»» name|string|false|none||none|
|»» productList|[object]|true|none|产品|none|
|»»» id|integer|false|none||none|
|»»» name|string|false|none||none|
|»»» categoryId|integer|false|none||none|
|»»» unit|string|false|none||none|
|»»» inventory|integer|false|none||none|
|»»» coverImg|string|false|none||none|
|»»» price|integer|false|none||none|
|»»» price2|null|false|none||none|
|»»» desc|string|false|none||none|
|»»» isShow|integer|false|none||none|
|»»» storeId|integer|false|none||none|
|»»» categoryName|string|false|none||none|
|»» cardCategory|[object]|true|none|卡分类|none|
|»»» id|integer|true|none||none|
|»»» storeId|integer|true|none||none|
|»»» name|string|true|none||none|
|»» cardList|[object]|true|none|卡|none|
|»»» id|integer|true|none||none|
|»»» type|integer|true|none||none|
|»»» secondType|integer|true|none||none|
|»»» gift|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» categoryId|integer|true|none||none|
|»»» categoryName|string|true|none||none|
|»»» price|integer|true|none||none|
|»»» expires|integer|true|none||none|
|»»» countLimit|integer|true|none||none|
|»»» isShow|integer|true|none||none|
|»»» info|[object]|true|none||none|
|»»»» cardId|integer|true|none||none|
|»»»» serviceId|integer|true|none||none|
|»»»» serviceName|string|true|none||none|
|»»»» productId|integer|true|none||none|
|»»»» productName|string|true|none||none|
|»»»» equity|integer|true|none||none|
|»»»» price|integer|true|none||none|
|»»»» price2|null|true|none||none|
|»»» totalCount|integer|true|none||none|
|»»» discount|integer|true|none||none|
|»»» discountDesc|string|true|none||none|

## GET 查询用户下单可用卡(同商家端查询可用卡)

GET /customer/card-match

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|goodsId|query|string| 否 ||none|
|goodsType|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

> 200 Response

```json
{
  "msg": "string",
  "code": 0,
  "data": [
    {
      "customerCardId": 0,
      "cardId": 0,
      "cardName": "string",
      "cardType": 0,
      "cardTypeDesc": "string",
      "cardSecondType": 0,
      "goodsType": 0,
      "goodsId": 0,
      "goodsName": "string",
      "equity": 0,
      "startTime": "string",
      "expiresTime": "string",
      "isLongTerm": 0,
      "expiresTimeDesc": "string",
      "countLimit": 0,
      "amount": 0,
      "gift": 0,
      "totalAmount": 0,
      "isValid": 0,
      "reason": "string"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» customerCardId|integer|true|none|购卡id|none|
|»» cardId|integer|true|none|卡id|none|
|»» cardName|string|true|none|卡名称|none|
|»» cardType|integer|true|none|卡分类|none|
|»» cardTypeDesc|string|true|none||none|
|»» cardSecondType|integer|true|none|卡二级分类|次卡|
|»» goodsType|integer|true|none|商品类型|1服务，2产品|
|»» goodsId|integer|true|none|商品id|none|
|»» goodsName|string|true|none|商品名|none|
|»» equity|integer|true|none|次卡表示数量，折扣充值卡表示折扣1.0-10.0|none|
|»» startTime|string|true|none|有效期开始|none|
|»» expiresTime|string|true|none|有效期结束|none|
|»» isLongTerm|integer|true|none|是否长期有效|none|
|»» expiresTimeDesc|string|true|none||none|
|»» countLimit|integer|true|none|共用次数上限|无限次通卡|
|»» amount|integer|true|none|充值卡支付金额|none|
|»» gift|integer|true|none|充值卡赠送金额|none|
|»» totalAmount|integer|true|none|储值卡总可用金额|none|
|»» isValid|integer|true|none|是否可用|none|
|»» reason|string|true|none|不可用原因|none|

## GET 查询用户全部卡

GET /customer/card

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|pageSize|query|string| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|string| 否 ||页码，默认1，页码，默认1|
|status|query|string| 否 ||状态1有效，2失效|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "total": 3,
    "list": [
      {
        "id": 27,
        "storeId": 11,
        "cardId": 35,
        "cardName": "新用户10次特惠卡",
        "cardType": 1,
        "cardTypeDesc": "次卡",
        "cardSecondType": 1,
        "startTime": "2024-09-30 00:00:00",
        "expiresTime": "2024-11-30 23:59:59",
        "isLongTerm": 0,
        "expiresTimeDesc": "2024/09/30-2024/11/30",
        "createTime": "2024-12-25 09:28:18",
        "storeCustomerId": 53,
        "customerId": 0,
        "customerName": "李老板",
        "customerPhone": "188****8888",
        "customerAvatar": "",
        "useCount": 0,
        "countLimit": 10,
        "amount": 0,
        "gift": 0,
        "totalAmount": 0,
        "totalGift": 0,
        "orderId": 120,
        "payAmount": 100,
        "isValid": 0,
        "discountDesc": "0/10",
        "payStatus": 2
      },
      {
        "id": 22,
        "storeId": 11,
        "cardId": 37,
        "cardName": "冲200送20",
        "cardType": 2,
        "cardTypeDesc": "充值卡",
        "cardSecondType": 0,
        "startTime": "2025-01-03 00:00:00",
        "expiresTime": "2026-01-03 23:59:59",
        "isLongTerm": 0,
        "expiresTimeDesc": "2025/01/03-2026/01/03",
        "createTime": "2024-12-23 20:29:35",
        "storeCustomerId": 53,
        "customerId": 0,
        "customerName": "李老板",
        "customerPhone": "188****8888",
        "customerAvatar": "",
        "useCount": 0,
        "countLimit": 0,
        "amount": 20,
        "gift": 20,
        "totalAmount": 200,
        "totalGift": 20,
        "orderId": 108,
        "payAmount": 200,
        "isValid": 1,
        "discountDesc": "￥40.00/￥220.00",
        "payStatus": 2
      },
      {
        "id": 21,
        "storeId": 11,
        "cardId": 37,
        "cardName": "冲200送20",
        "cardType": 2,
        "cardTypeDesc": "充值卡",
        "cardSecondType": 0,
        "startTime": "2021-12-30 00:00:00",
        "expiresTime": "2023-12-30 23:59:59",
        "isLongTerm": 0,
        "expiresTimeDesc": "2021/12/30-2023/12/30",
        "createTime": "2024-12-23 18:08:24",
        "storeCustomerId": 53,
        "customerId": 0,
        "customerName": "李老板",
        "customerPhone": "188****8888",
        "customerAvatar": "",
        "useCount": 0,
        "countLimit": 0,
        "amount": 20,
        "gift": 20,
        "totalAmount": 200,
        "totalGift": 20,
        "orderId": 104,
        "payAmount": 200,
        "isValid": 0,
        "discountDesc": "￥40.00/￥220.00",
        "payStatus": 2
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» storeId|integer|true|none||none|
|»»» cardId|integer|true|none|卡id|none|
|»»» cardName|string|true|none|卡名称|none|
|»»» cardType|integer|true|none|卡类别|none|
|»»» cardTypeDesc|string|true|none|卡类别|none|
|»»» cardSecondType|integer|true|none||none|
|»»» startTime|string|true|none|有效开始时间|none|
|»»» expiresTime|string|true|none|有效期结束时间|none|
|»»» isLongTerm|integer|true|none|是否长期卡|none|
|»»» expiresTimeDesc|string|true|none|到期时间|none|
|»»» createTime|string|true|none|创建时间|none|
|»»» storeCustomerId|integer|true|none|门店客户id|none|
|»»» customerId|integer|true|none|客户id|none|
|»»» customerName|string|true|none|客户名|none|
|»»» customerPhone|string|true|none|客户手机号|none|
|»»» customerAvatar|string|true|none|客户头像|none|
|»»» useCount|integer|true|none|次卡使用次数|none|
|»»» countLimit|integer|true|none|不限次卡次数上限；有限次卡总次数|none|
|»»» amount|integer|true|none|充值卡剩余金额|none|
|»»» gift|integer|true|none|充值卡剩余赠送|none|
|»»» totalAmount|integer|true|none|累计充值|none|
|»»» totalGift|integer|true|none|累计赠送|none|
|»»» orderId|integer|true|none|订单id|none|
|»»» payAmount|integer|true|none|购买实付（储值卡首次支付金额）|none|
|»»» isValid|integer|true|none|1有效，0无效,2待支付，3已取消|none|
|»»» discountDesc|string|true|none|权益简介|none|
|»»» payStatus|integer|true|none|支付状态|none|

## GET 查询用户充值卡

GET /customer/card-value

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "id": 1,
      "customerCardId": 1,
      "startTime": "2025-02-08 11:25:51",
      "expiresTime": "2026-02-08 11:25:51",
      "isLongTerm": 0,
      "expiresTimeDesc": "2025/02/08-2026/02/08",
      "createTime": "2025-02-08T11:25:51",
      "cardId": 1,
      "cardName": "1000赠100",
      "cardSecondType": 0,
      "cardType": 2,
      "amount": 1500,
      "gift": 150,
      "totalAmount": 1650
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|false|none|购卡id|none|
|»» startTime|string|false|none|有效期开始|none|
|»» expiresTime|string|false|none|有效期|none|
|»» isLongTerm|integer|false|none|是否长期有效|none|
|»» createTime|string|false|none||none|
|»» cardId|integer|false|none|卡id|none|
|»» cardName|string|false|none|卡名称|none|
|»» cardSecondType|integer|false|none|卡二级分类|次卡|
|»» cardType|integer|false|none|卡分类|none|
|»» amount|integer|false|none|充值金额|none|
|»» gift|integer|false|none|赠送金额|none|
|»» totalAmount|integer|false|none|可用总金额|none|

## GET 查询用户支付方式(待定)

GET /customer/pay-type-conf

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "code": 3,
      "desc": "微信支付"
    },
    {
      "code": 6,
      "desc": "储值卡"
    },
    {
      "code": 8,
      "desc": "到店付"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» code|integer|true|none||none|
|»» desc|string|true|none||none|

## GET 查询预约详情

GET /customer/booking/{bookingId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|bookingId|path|integer| 是 ||none|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "customerId": 7,
    "storeCustomerId": 1,
    "storeCustomerPhone": "15192176273",
    "storeCustomerName": "张飞",
    "storeCustomerNamePY": "ZF",
    "customerCardC": 4,
    "storeCustomerAvatar": "",
    "startTime": "2025-01-18T12:30:00",
    "customerAddress": "customerAddress",
    "artisanId": 0,
    "artisanName": "",
    "notes": "备注",
    "bookingService": [
      {
        "storeServiceId": 1,
        "serviceName": "美甲",
        "serviceCoverImg": "https://mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.cdn.bspapp.com/cloudstorage/2367cd78-fa93-4fb3-97a2-a58a359ce832.jpg",
        "duration": 45,
        "count": 1,
        "amount": 100
      }
    ],
    "bookingRecord": {
      "createBy": 0,
      "createTime": "2025-03-02 16:54:43",
      "createHandleType": 1,
      "createHandleTypeDesc": "客户",
      "signTime": null,
      "cancelTime": null,
      "finishTime": null,
      "signHandleType": null,
      "signHandleTypeDesc": null,
      "cancelHandleType": null,
      "cancelHandleTypeDesc": null,
      "finishHandleType": null,
      "finishHandleTypeDesc": null
    },
    "storeName": "wj的美妆店",
    "bookingStatus": 1,
    "bookingStatusDesc": "待服务",
    "orderId": 65,
    "payStatus": 1,
    "storeServiceType": 1,
    "storeServiceTypeDesc": "到店服务"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» customerId|integer|true|none|客户id|none|
|»» storeCustomerId|integer|true|none|门店客户id|none|
|»» storeCustomerPhone|string|true|none|门店客户手机号|none|
|»» storeCustomerName|string|true|none|客户名|none|
|»» storeCustomerNamePY|string|true|none|客户名拼音|none|
|»» customerCardC|integer|true|none|卡数量|none|
|»» storeCustomerAvatar|string|true|none|客户头像|none|
|»» startTime|string|true|none|预约开始时间|none|
|»» customerAddress|string|true|none|地址|none|
|»» artisanId|integer|true|none|手艺人|0表示未分配|
|»» artisanName|string|true|none|手艺人|none|
|»» notes|string|true|none|备注|none|
|»» bookingService|[object]|true|none|预约的服务列表|none|
|»»» storeServiceId|integer|false|none|服务id|none|
|»»» serviceName|string|false|none|服务名|none|
|»»» serviceCoverImg|string|false|none|服务头图|none|
|»»» duration|integer|false|none|时长分钟|none|
|»»» count|integer|false|none|数量|none|
|»»» amount|integer|false|none|金额|none|
|»» bookingRecord|object|true|none||none|
|»»» createBy|integer|true|none||none|
|»»» createTime|string|true|none||none|
|»»» createHandleType|integer|true|none||none|
|»»» createHandleTypeDesc|string|true|none||none|
|»»» signTime|null|true|none|签到时间|none|
|»»» cancelTime|null|true|none|取消时间|none|
|»»» finishTime|null|true|none|完成时间|none|
|»»» signHandleType|null|true|none|签到人|none|
|»»» signHandleTypeDesc|null|true|none||none|
|»»» cancelHandleType|null|true|none|取消人|none|
|»»» cancelHandleTypeDesc|null|true|none||none|
|»»» finishHandleType|null|true|none|完成人|none|
|»»» finishHandleTypeDesc|null|true|none||none|
|»» storeName|string|true|none|门店名|none|
|»» bookingStatus|integer|true|none|状态|WAIT(1,"待服务"),     UNDERWAY(2,"服务中"),     FINISH(3,"已完成"),     CANCEL(4,"已取消"),;|
|»» bookingStatusDesc|string|true|none|预约状态中文|none|
|»» orderId|integer|true|none|订单id|none|
|»» payStatus|integer|true|none|支付状态|none|
|»» storeServiceType|integer|true|none|服务类别|1到店，2上门|
|»» storeServiceTypeDesc|string|true|none|服务类别中文|none|

## GET 查询客户订单列表

GET /customer/order

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|pageSize|query|string| 否 ||每页条数，默认10，每页条数，默认10|
|pageNum|query|string| 否 ||页码，默认1，页码，默认1|
|searchStatus|query|string| 否 ||状态：101待支付，102待服务，103已完成，104已取消|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

> 200 Response

```json
{
  "msg": "string",
  "code": 0,
  "data": {
    "total": 0,
    "list": [
      {
        "id": 0,
        "orderNo": "string",
        "createTime": "string",
        "amount": 0,
        "payStatus": 0,
        "payStatusDesc": "string",
        "orderItem": [
          {
            "goodsType": null,
            "goodsId": null,
            "goodsName": null,
            "goodsCount": null,
            "goodsPrice": null,
            "amount": null,
            "goodsCoverImg": null,
            "artisanId": null,
            "artisanName": null,
            "customerCardId": null,
            "cardName": null,
            "goodsCardType": null
          }
        ],
        "searchStatus": 0,
        "createSource": 0,
        "createSourceType": "string",
        "storeCustomerId": 0,
        "customerName": "string",
        "customerPhone": "string"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» id|integer|true|none|订单id|none|
|»»» orderNo|string|true|none|订单编号|none|
|»»» createTime|string|true|none|创建时间|none|
|»»» amount|integer|true|none||none|
|»»» payStatus|integer|true|none|支付状态|1待支付，2已支付，3未支付取消，4退款|
|»»» payStatusDesc|string|true|none|支付状态名|none|
|»»» orderItem|[object]|true|none||none|
|»»»» goodsType|integer|true|none|订单项类别|1服务，2产品，3卡，4预约，5充值|
|»»»» goodsId|integer|true|none|商品id|none|
|»»»» goodsName|string|true|none|商品名|none|
|»»»» goodsCount|integer|true|none|商品数量|none|
|»»»» goodsPrice|integer|true|none|商品价格|none|
|»»»» amount|integer|true|none|付款金额|none|
|»»»» goodsCoverImg|string|true|none|商品图片|none|
|»»»» artisanId|integer¦null|true|none|销售|none|
|»»»» artisanName|string¦null|true|none|销售|none|
|»»»» customerCardId|integer|true|none|用卡id|none|
|»»»» cardName|string|true|none|卡名称|none|
|»»»» goodsCardType|integer¦null|true|none|商品卡类别|goodsType是卡时有意义|
|»»» searchStatus|integer|true|none|状态：101待支付，102待服务，103已完成，104已取消|none|
|»»» createSource|integer|true|none|创建来源|none|
|»»» createSourceType|string|true|none|创建来源归类|none|
|»»» storeCustomerId|integer|true|none|门店客户id|none|
|»»» customerName|string|true|none|客户名|none|
|»»» customerPhone|string|true|none|客户手机号|none|

## GET 查询用户订单详情

GET /customer/order/{orderId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|orderId|path|string| 是 ||none|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "orderId": 44,
    "orderNo": "1891492952887701504",
    "createSource": 2,
    "createTime": "2025-02-17T22:20:37",
    "amount": 19.9,
    "payStatus": 2,
    "payStatusDesc": "已支付",
    "payType": 3,
    "payTypeDesc": "微信支付",
    "payTime": "2025-02-17T22:20:37",
    "notes": "",
    "storeId": 4,
    "storeCustomerId": 4,
    "customerId": 0,
    "customerName": "危晓萍",
    "customerPhone": "18920202020",
    "customerAvatar": "",
    "customerCardCount": 3,
    "adviserId": 0,
    "adviserName": null,
    "refundId": 0,
    "refundTime": null,
    "refundAmount": null,
    "orderItem": [
      {
        "goodsType": 3,
        "goodsId": 12,
        "goodsName": "体验卡",
        "goodsCount": 1,
        "goodsPrice": 19.9,
        "amount": 19.9,
        "goodsCoverImg": "",
        "artisanId": null,
        "artisanName": null,
        "customerCardId": 0,
        "cardName": "",
        "goodsCardType": 1
      }
    ],
    "searchStatus": 103
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» orderId|integer|true|none|订单id|none|
|»» orderNo|string|true|none|订单编号|none|
|»» createSource|null|true|none|1开单，2预约，3开卡，4充值|none|
|»» createTime|string|true|none|创建时间|none|
|»» amount|integer|true|none|订单支付金额|none|
|»» payStatus|integer|true|none|支付状态|1待支付，2已支付，3未支付取消，4已退费|
|»» payType|integer|true|none|支付类型|none|
|»» payTime|null|true|none|支付时间|none|
|»» notes|string|true|none|备注|none|
|»» storeId|integer|true|none||none|
|»» storeCustomerId|integer|true|none|门店客户id|none|
|»» customerId|integer|true|none|客户注册id|none|
|»» customerName|string|true|none|客户名|none|
|»» customerPhone|string|true|none|客户手机号|none|
|»» customerAvatar|string|true|none|客户头像|none|
|»» customerCardCount|integer|true|none|客户卡数量|none|
|»» adviserId|integer|true|none||none|
|»» adviserName|null|true|none|销售|none|
|»» refundId|integer|true|none|退单取消id|none|
|»» refundTime|null|true|none|退单取消时间|none|
|»» refundAmount|null|true|none|退款金额|none|
|»» orderItem|[object]|true|none||none|
|»»» goodsType|integer|false|none|商品类别|1服务，2产品，3卡，4预约，5充值|
|»»» goodsId|integer|false|none||商品id|
|»»» goodsName|string|false|none||商品名|
|»»» goodsCount|integer|false|none||商品数量|
|»»» goodsPrice|integer|false|none||商品价格|
|»»» amount|integer|false|none||支付金额|
|»»» goodsCoverImg|string|false|none||商品图片|
|»»» artisanId|integer|false|none||销售|
|»»» artisanName|string|false|none||销售|
|»»» customerCardId|integer|false|none||用的卡|
|»»» cardName|string|false|none||用的卡名字|

## GET 查询用户预约列表

GET /customer/booking

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|sDate|query|string| 否 ||none|
|eDate|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

> 200 Response

```json
{
  "msg": "string",
  "code": 0,
  "data": {
    "total": 0,
    "list": [
      {
        "bookingId": 0,
        "storeCustomerId": 0,
        "storeCustomerName": "string",
        "phone": "string",
        "storeServiceType": 0,
        "storeServiceTypeDesc": "string",
        "artisanId": 0,
        "artisanName": "string",
        "artisanPhone": "string",
        "startTime": "string",
        "duration": 0,
        "startTimeStr": "string",
        "bookingStatus": 0,
        "bookingStatusDesc": "string",
        "serviceList": [
          {
            "storeServiceId": null,
            "serviceName": null,
            "serviceCoverImg": null,
            "duration": null,
            "count": null,
            "amount": null
          }
        ],
        "payStatus": 0,
        "createBy": 0,
        "createType": 0
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» bookingId|integer|true|none|预约id|none|
|»»» storeCustomerId|integer|true|none|门店客户id|none|
|»»» storeCustomerName|string|true|none|门店客户名|none|
|»»» phone|string|true|none|预约联系电话|none|
|»»» storeServiceType|integer|true|none|服务类别|到店，2上门|
|»»» storeServiceTypeDesc|string|true|none|服务类别中文|none|
|»»» artisanId|integer|true|none|手艺人|none|
|»»» artisanName|string|true|none||none|
|»»» artisanPhone|string|true|none||none|
|»»» startTime|string|true|none|开始时间|none|
|»»» duration|integer|true|none|时长|none|
|»»» startTimeStr|string|true|none|开始时间拼接|none|
|»»» bookingStatus|integer|true|none|预约状态|none|
|»»» bookingStatusDesc|string|true|none|预约状态中文|none|
|»»» serviceList|[object]|true|none|服务|none|
|»»»» storeServiceId|integer|true|none|服务id|none|
|»»»» serviceName|string|true|none|服务名|none|
|»»»» serviceCoverImg|string|true|none|服务头图|none|
|»»»» duration|integer|true|none|时长|none|
|»»»» count|integer|true|none|数量|none|
|»»»» amount|integer|true|none|所属子订单支付金额|none|
|»»» payStatus|integer|true|none|支付状态|none|
|»»» createBy|integer|true|none|创建人id|0客户，大于0商家|
|»»» createType|integer|true|none|创建人来源端|1客户端，2商家端|

## POST 提交预约

POST /customer/booking

> Body 请求参数

```json
{
  "storeServiceType": 1,
  "customerAddress": "customerAddress",
  "startTime": "2025-01-18 12:30:00",
  "artisanId": 0,
  "notes": "备注",
  "payType": 3,
  "customerCardId": 0,
  "service": [
    {
      "storeServiceId": 1,
      "totalAmount": 100,
      "amount": 100,
      "customerCardId": 0,
      "cardId": 0,
      "cardReduceAmount": 0,
      "goodsCount": 1
    }
  ],
  "amount": 100
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|
|body|body|object| 否 ||none|
|» storeServiceType|body|integer| 是 | 服务地点|1到店服务，2上门服务|
|» customerAddress|body|string| 是 | 上门地址|none|
|» startTime|body|string| 是 | 预约时间|none|
|» artisanId|body|integer| 是 | 手艺人|none|
|» notes|body|string| 是 | 备注|none|
|» payType|body|integer| 是 | 支付方式|3微信支付，6充值卡支付，空或者0不支付（到店付的传值0）|
|» customerCardId|body|integer| 是 | 充值卡支付的id|none|
|» service|body|[object]| 是 | 预约项目|none|
|»» storeServiceId|body|integer| 否 | 服务id|none|
|»» totalAmount|body|integer| 否 | 总金额|none|
|»» amount|body|integer| 否 | 优惠后金额|none|
|»» customerCardId|body|integer| 否 | 优惠用购卡id|none|
|»» cardId|body|integer| 否 | 优惠用卡id|none|
|»» cardReduceAmount|body|integer| 否 | 卡优惠金额|none|
|»» goodsCount|body|integer| 否 | 服务数量|none|
|» amount|body|integer| 是 | 订单金额|none|

> 返回示例

```json
{
  "msg": "操作成功",
  "code": 200,
  "data": {
    "gainIntegral": 100,
    "orderId": 46,
    "payAmount": 100,
    "payStatus": 2,
    "wxPay": {
      "appId": "wx4523c84aefbd91d2",
      "timestamp": "1740570909",
      "nonceStr": "y3Pczk1Yu3bG2nOUy5GnpdHVrZgaDIvH",
      "packageVal": "prepay_id=wx26195509068190f59507ca8a3517250001",
      "signType": "RSA",
      "paySign": "g8RgFTr2OFi0xBh8ZfQSnQ9yxvHaZMJk/H1tlO2elaTV7vqfM1Dh8QhHqbzMM08tTinWWRjiQNTi/Z92fuNPResdzQosltwL4Q92vgzRwK42xFI/rM+RSwAgyljSDiRDm/dZY5pMCTP1wDwEwbzpyfrar7+O4tJjmrZBS0X3l0ue7lHqrsp/yOk6Ni5psCnJP0tGKFqipr6KHFBgYsax6NR61basdoYR6BY58/x0DGB57b+1TqlqhOXQ92A5XNfWcwT4ocPHwdk+XndRIAGYEQ0vDHb7Fds94eHGyQp1Hr+lmkXASAbevzBYasuHMvJGa/P7P5cX2A8AUh7ac/+lCQ=="
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» gainIntegral|integer|true|none|获得积分|none|
|»» orderId|integer|true|none|订单id|none|
|»» payAmount|integer|true|none|支付金额|none|
|»» payStatus|integer|true|none|支付状态|1待支付，2已支付，3未支付取消，4已退费|
|»» wxPay|object|true|none|微信支付参数|none|
|»»» appId|string|true|none|公众号appid|none|
|»»» timestamp|string|true|none|时间戳|none|
|»»» nonceStr|string|true|none|随机串|none|
|»»» packageVal|string|true|none|预支付交易会话标识|none|
|»»» signType|string|true|none|签名方式|none|
|»»» paySign|string|true|none|签名|none|

## GET 查询用户积分列表

GET /customer/store-customer

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|
|C-Store-Id|header|string| 否 ||客户端当前门店id|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# 数据模型
