/*
 * @Author: eds
 * @Date: 2020-07-29 16:10:06
 * @LastEditTime: 2020-08-05 14:09:59
 * @LastEditors: eds
 * @Description:
 * @FilePath: \wzsjjt-bd-visual\src\config\server\cesiumTreeOption.js
 */
const TOP_LEVEL_OPTION_SSFL = [
  {
    label: "养老设施",
    ids:"成果汇总_设施点@成果#1_养老设施",
  },
  {
    label: "医疗设施",
    ids:"成果汇总_设施点@成果#1_医疗设施",
  },
  {
    label: "商业设施",
    ids:"成果汇总_设施点@成果#1_商业设施",
  },
  {
    label: "教育设施",
    ids:"成果汇总_设施点@成果#1_教育设施",
  },
  {
    label: "体育设施",
    ids:"成果汇总_设施点@成果#1_体育设施",
  },
  {
    label: "文化设施",
    ids:"成果汇总_设施点@成果#1_文化设施",
  },
  {
    label: "绿化设施",
    ids:"成果汇总_设施点@成果#1_绿化设施",
  },
];
const TOP_LEVEL_OPTION = [
  {
    id: "注记分类",
    label: "注记分类",
    children: TOP_LEVEL_OPTION_SSFL.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    label: "白模",
    url:
      //"http://172.20.83.223:8098/iserver/services/3D-CM_LC/rest/realspace/datas/RES_LC_EraseMAX_Z_Model@baimo/config"
      "http://172.20.83.223:8098/iserver/services/3D-BaiMo/rest/realspace/datas/BaiMo_central/config"
      //"https://ditu.wzcitybrain.com/iserver/services/3D-mongodb-BaiMo/rest/realspace/datas/BaiMo/config"
  },
  {
    label: "精模",
    url:
      //"http://172.20.83.223:8098/iserver/services/3D-mongodb-MAXShijuJZ/rest/realspace/datas/MAX_Shiju_JZ/config",
      "http://172.20.83.223:8098/iserver/services/3D-mongodb4/rest/realspace/datas/JZ/config",
    dataurl:
      "http://172.20.83.223:8098/iserver/services/data-SW_DATA/rest/data",
      //"http://172.20.83.223:8098/iserver/services/data-SW_Data/rest/data",
    dlurl:
    //"http://172.20.83.223:8098/iserver/services/3D-mongodb/rest/realspace/datas/DL/config",
    "http://172.20.83.223:8098/iserver/services/3D-mongodb4/rest/realspace/datas/FJZ/config",
    // zburl:
    // "http://172.20.83.223:8098/iserver/services/3D-mongodb/rest/realspace/datas/ZB/config",
    // qturl:
    // "http://172.20.83.223:8098/iserver/services/3D-mongodb/rest/realspace/datas/QT/config",
    // dxurl:
    // "http://172.20.83.223:8098/iserver/services/3D-mongodb/rest/realspace/datas/DX/config",
    // lurl:
    // "http://172.20.83.223:8098/iserver/services/3D-mongodb/rest/realspace/datas/JZ/config",
    riverurl:
     "http://172.20.83.223:8098/iserver/services/3D-River_Slow/rest/realspace/datas/River@%E7%B2%BE%E6%A8%A1_%E5%AF%BC%E5%87%BA_2012/config",
    // newurl:
    // "http://172.20.83.223:8098/iserver/services/3D-mongodb/rest/realspace/datas/max_Shiju_QT/config",
      //"http://172.20.83.223:8098/iserver/services/map-mvt-XiaoQuLvDi/restjsr/v1/vectortile/maps/%E5%B0%8F%E5%8C%BA%E7%BB%BF%E5%9C%B0",
    dataBind: {
      dataSourceName: "172.20.83.196_swdata",
      dataSetName: "%E5%BB%BA%E7%AD%91_table"
    },
    camera: {
      x: -2877074.5261789295,
      y: 4842678.649871697,
      z: 2993284.6421134197
    },
    cameraDone: true
  },
  // {
  //   label: "2017精模",
  //   url:
  //     "http://172.20.83.223:8098/iserver/services/3D-MAX_LuCheng/rest/realspace/datas/%E5%B8%82%E5%8C%BA_2017/config",
  //   dataurl:
  //     "http://172.20.83.223:8098/iserver/services/data-ChengShiJingMo/rest/data",
  //   fgmurl:
  //     "http://172.20.83.223:8098/iserver/services/map-mvt-XiaoQuLvDi/restjsr/v1/vectortile/maps/%E5%B0%8F%E5%8C%BA%E7%BB%BF%E5%9C%B0",  
  //   dataBind: {
  //     dataSourceName: "精模_市区",
  //     dataSetName: "max_2017"
  //   },
  //   camera: {
  //     x: -2877074.5261789295,
  //     y: 4842678.649871697,
  //     z: 2993284.6421134197
  //   },
  //   cameraDone: true
  // },
  {
    label: "河流动态场景",
    componentEvent: "cesium-3d-event",
    componentKey: "3d7",
  }
  /*   {
      label: "山区村落自然灾害易发区",
      url:
        "http://10.36.234.83:8090/iserver/services/map-FXFX_DATA/rest/maps/FXFX_YJ_ComprehensiveScore",
      vectorTile: true
    } */
];
//这里用于添加BIM的图层勾选
//componentKey 是用于来绑定btn按钮的值
const BIM_GRAPHIS_OPTION = [
  {
    label: "安置房BIM分析",
    componentEvent: "cesium-3d-event",
    componentKey: "3d2"
  },
  {
    label: "机场BIM场景",
    componentEvent: "cesium-3d-event",
    componentKey: "3d3"
  },
  {
    label: "S1线轨道场景",
    componentEvent: "cesium-3d-event",
    componentKey: "3d5",
  }
];
//永嘉二级
const LEAN_GRAPHIS_OPTION_YJ_HT = [
  {
    label: "埭下村",
    url:"",
    camera: {
      x: -2875396.824866244,
      y: 4843322.049050793,
      z: 2993500.7331779394
    },
    cameraDone: true
  }
];
const LEAN_GRAPHIS_OPTION_YJ_JX = [
  {
    label: "黄山村",
    url:"http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_HuangShanCun",
    camera: {
      x: -2875396.824866244,
      y: 4843322.049050793,
      z: 2993500.7331779394
    },
    cameraDone: true
  }
];
const LEAN_GRAPHIS_OPTION_YJ_DC = [
  {
    label: "林村",
    url:"http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_LinCun",
    camera: {
      x: -2875396.824866244,
      y: 4843322.049050793,
      z: 2993500.7331779394
    },
    cameraDone: true
  }
];
const LEAN_GRAPHIS_OPTION_YJ_FL = [
  {
    label: "外垟村",
    url:"http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_WaiYangCun",
    camera: {
      x: -2875396.824866244,
      y: 4843322.049050793,
      z: 2993500.7331779394
    },
    cameraDone: true
  }
];
const LEAN_GRAPHIS_OPTION_YJ_YT = [
  {
    label: "西塘村",
    url:"http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_XiTangCun",
    camera: {
      x: -2875396.824866244,
      y: 4843322.049050793,
      z: 2993500.7331779394
    },
    cameraDone: true
  }
];
//文成二级
const LEAN_GRAPHIS_OPTION_WC_NT = [
  {
    label: "西塘村",
    url:"http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_XiTangCun",
    camera: {
      x: -2875396.824866244,
      y: 4843322.049050793,
      z: 2993500.7331779394
    },
    cameraDone: true
  }
];
const LEAN_GRAPHIS_OPTION_WC_TL = [
  {
    label: "西塘村",
    url:"http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_XiTangCun",
    camera: {
      x: -2875396.824866244,
      y: 4843322.049050793,
      z: 2993500.7331779394
    },
    cameraDone: true
  }
];
//瑞安二级
const LEAN_GRAPHIS_OPTION_RA_FY = [];
const LEAN_GRAPHIS_OPTION_RA_GL = [];
const LEAN_GRAPHIS_OPTION_RA_XJ = [];
const LEAN_GRAPHIS_OPTION_RA_TX = [];
const LEAN_GRAPHIS_OPTION_RA_MY = [];
const LEAN_GRAPHIS_OPTION_RA_TS = [];
//平阳二级
const LEAN_GRAPHIS_OPTION_PY_NC = [];
const LEAN_GRAPHIS_OPTION_PY_SM = [];
const LEAN_GRAPHIS_OPTION_PY_AJ = [];
//瓯海二级
const LEAN_GRAPHIS_OPTION_OH_SY = [
  {
    label: "沙河丹东村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_ShaHeDanDongCun_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2877352.20531456,
      y: 4843909.64217383,
      z: 2990353.3137743706
    },
    cameraDone: true
  },
  {
    label: "上垟村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_ShangYang/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2880299.714666278,
      y: 4844586.066833377,
      z: 2989184.3888692223
    },
    cameraDone: true
  },
  {
    label: "池底村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_ChiDiCun_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2877180.2891030647,
      y: 4845180.748142598,
      z: 2988424.125020722
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_OH_LQ = [
  {
    label: "东风村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_DongFengCun_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2870750.288029349,
      y: 4847999.546336255,
      z: 2990484.7058189246
    },
    cameraDone: true
  },
  {
    label: "吕家降村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_LvJiaJiang_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2868014.459160964,
      y: 4849187.252250286,
      z: 2990898.067874922
    },
    cameraDone: true
  },
  {
    label: "玕西、东、南村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_HuanXiDongNanCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2871651.6776698376,
      y: 4850156.152520998,
      z: 2989524.8445274783
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_OH_NB = [
  {
    label: "横港头村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_HengGangTou/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2875538.9140962446,
      y: 4845432.857616331,
      z: 2989770.3141943887
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_OH_CS = [
  {
    label: "山根(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_ShanGen/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2877091.9260217217,
      y: 4847924.183468532,
      z: 2985101.8926076433
    },
    cameraDone: true
  },
  {
    label: "茶山(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_ChaShan/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2887419.1209149817,
      y: 4849246.980593689,
      z: 2980912.637518814
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_OH_TT = [
  {
    label: "老殿后村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_LaoDianHouCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2875964.872470631,
      y: 4844972.574680709,
      z: 2990372.458596976
    },
    cameraDone: true
  },
  {
    label: "林村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_LinCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2875626.45247481,
      y: 4844209.730257807,
      z: 2991551.7828711476
    },
    cameraDone: true
  },
  {
    label: "西塘村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_XiTangCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2874504.1889599315,
      y: 4845234.248616295,
      z: 2991234.636043631

    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_OH_JS = [
  {
    label: "净水新桥将军桥村",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_JinShui/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2873992.17612299,
      y: 4848140.3617488,
      z: 2990778.0554434992
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_OH_GX = [
  {
    label: "梅屿村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_MeiYuCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2868183.2822279595,
      y: 4849508.153741011,
      z: 2992274.2206691625
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_OH_LO =[
  {
    label: "王宅、下川村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_WangZhai_XiaChuanC/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2876820.6070802826,
      y: 4849155.477909199,
      z: 2984436.4969276995
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_OH_ZY = [
  {
    label: "北林垟(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_BeiLinYang/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2852654.7679743455,
      y: 4860943.482194311,
      z: 2991960.3881733213
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_OH_QX = [
  {
    label: "雄溪村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_XiongXiCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2867893.845822856,
      y: 4853974.459679007,
      z: 2988175.30774241
    },
    cameraDone: true
  },
];
//龙湾二级
const LEAN_GRAPHIS_OPTION_LW_YX = [
  {
    label: "黄山村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_HuangShanCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2888499.4709190894,
      y: 4838769.525295092,
      z: 2988786.058268524
    },
    cameraDone: true
  },
  {
    label: "龙东村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_LongDongCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2887069.567825718,
      y: 4839223.949873874,
      z: 2989988.8910403643
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LW_PZ = [
  {
    label: "双车头村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_TangXiC_ShuangCheTouC/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2877995.4435694623,
      y: 4843063.168354934,
      z: 2992370.120318237
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LW_YONGX = [
  {
    label: "永兴工业区(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_YongXingGongYeQu/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2890928.4798702295,
      y: 4841915.57105087,
      z: 2982920.408525601
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LW_YONGZ = [
  {
    label: "石浦村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_ShiPuCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2894877.700065756,
      y: 4841124.726071257,
      z: 2984579.85046978
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LW_ZY = [
  {
    label: "三郎桥村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_SanLangQiaoCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2880982.606426352,
      y: 4843783.907221606,
      z: 2988913.8839962063
    },
    cameraDone: true
  },
  {
    label: "状元桥村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_ZhuangYuanQiaoCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x:-2885728.208692684,
      y: 4841634.87846383,
      z: 2989752.7162536522
    },
    cameraDone: true
  },
];
//乐清二级
const LEAN_GRAPHIS_OPTION_YQ_LC = [
  {
    label: "江前村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_JiangQainCun_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2892993.5928656766,
      y: 4825120.741512467,
      z: 3010483.0521930517
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_YQ_HQ = [];
const LEAN_GRAPHIS_OPTION_YQ_LS = [];
const LEAN_GRAPHIS_OPTION_YQ_BB = [];
const LEAN_GRAPHIS_OPTION_YQ_FR = [];
//洞头二级
const LEAN_GRAPHIS_OPTION_DT_DP = [];
//苍南二级
const LEAN_GRAPHIS_OPTION_CN_LX = [];
const LEAN_GRAPHIS_OPTION_CN_QK = [];
const LEAN_GRAPHIS_OPTION_CN_LP = [];
//鹿城二级
const LEAN_GRAPHIS_OPTION_LC_BJ = [
  {
    label: "黎二村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_LiErCun_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2874373.9409043617,
      y: 4842755.802654327,
      z: 2995543.9623425514
    },
    cameraDone: true
  },
  {
    label: "蒲州村(2016)",
    url:
       "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_PuZhouCun_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2878334.593677301,
      y: 4841573.940842317,
      z: 2993703.022134084
    },
    cameraDone: true
  },
  {
    label: "山下村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_ShanXiaCun_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2875802.2412011586,
      y: 4842351.036691747,
      z: 2994482.8810546356
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LC_GH = [
  {
    label: "双桥村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_ShuangQiaoCun_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2869584.1739701116,
      y: 4846417.852837862,
      z: 2994454.2980063935
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LC_NH = [
  {
    label: "横渎村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_HengDuCun_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2875396.824866244,
      y: 4843322.049050793,
      z: 2993500.7331779394
    },
    cameraDone: true
  },
  {
    label: "鱼鳞浃村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_YuLinJiaCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2874720.333475346,
      y: 4844221.774554205,
      z: 2992694.5073040165
    },
    cameraDone: true
  },
  {
    label: "龙沈村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_LongShenCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2875018.7552788774,
      y:  4843382.7408750495,
      z: 2993382.274890433
    },
    cameraDone: true
  },
  {
    label: "龙方南塘局部(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_LongFangNanTang/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2874317.7779393964,
      y: 4844754.702301374,
      z: 2992769.919365716
    },
    cameraDone: true
  },
  {
    label: "老涂村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_LaoTuCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2875396.824866244,
      y: 4843322.049050793,
      z: 2993500.7331779394
    },
    cameraDone: true
  }
];
const LEAN_GRAPHIS_OPTION_LC_NJ = [
  {
    label: "龙方村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_DongFengCun_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2871268.2924297373,
      y: 4848061.367879729,
      z: 2990359.8037505765
    },
    cameraDone: true
  },
  {
    label: "牛桥底村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_NiuQiaoDi_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2872544.4231165173,
      y: 4846110.714556757,
      z: 2991545.058873369
    },
    cameraDone: true
  },
  {
    label: "里垟、德政村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_LiYangDeiZhengCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x:  -2872833.3714544587,
      y: 4846101.342735429,
      z: 2991779.134398041
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LC_PX = [
  {
    label: "龟湖水乡(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_GuiHuShuiXiang/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2873136.49087782,
      y: 4844106.552984252,
      z: 2994646.884211555
    },
    cameraDone: true
  },
  {
    label: "蒋家桥村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_JiangJiaQiao_2016/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2873982.181581846,
      y: 4843195.448322195,
      z: 2994654.422960708
    },
    cameraDone: true
  },
  {
    label: "温瑞大道二期(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_WenRuiDaDaoErQi/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2876133.6524552405,
      y: 4844983.272297854,
      z: 2993080.457541979
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LC_SY = [
  {
    label: "牛岭村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_NiuLingCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2868428.5588743063,
      y: 4847216.127112101,
      z: 2995808.9185623475
    },
    cameraDone: true
  },
  {
    label: "欧浦垟村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_OuPuYangCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2869233.368994665,
      y: 4846147.573573825,
      z: 2996309.5702228774
    },
    cameraDone: true
  },
  {
    label: "中央涂村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_ZhongYangTu_2016_2/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2868406.778311407,
      y: 4845735.803338195,
      z: 2996063.3154144934
    },
    cameraDone: true
  },
  {
    label: "营楼桥村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_YingLouQiaoCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2868869.7877248093,
      y: 4846839.993914358,
      z: 2995512.6684623
    },
    cameraDone: true
  },
  {
    label: "箬笠岙村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_RuoLiAoCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2873795.0356278843,
      y: 4850371.166768714,
      z: 2991343.7473454275
    },
    cameraDone: true
  },
  {
    label: "鹿城工业区(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_LuChengGongYeQu/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2867894.3569503627,
      y: 4846543.302366893,
      z: 2996183.2331805425
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LC_ST = [
  {
    label: "河通桥村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_HeTongQiaoCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2870734.148235354,
      y: 4845114.862540317,
      z: 2995258.213560419
    },
    cameraDone: true
  },
  {
    label: "水心村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_ShuiXinCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2872561.8910888894,
      y: 4845638.49530471,
      z: 2993746.1125424933
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LC_TQ = [
  {
    label: "外垟村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_WaiYangCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2861947.585081498,
      y: 4844949.216878983,
      z: 3003271.4570451006
    },
    cameraDone: true
  },
  {
    label: "北岸村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_BeiAnCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2858145.507425709,
      y: 4849576.3850830365,
      z: 3000545.9347486235
    },
    cameraDone: true
  },
  {
    label: "方隆村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_FangLongCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2860770.774568575,
      y: 4847830.049761502,
      z: 3001539.5318095055
    },
    cameraDone: true
  }
];
const LEAN_GRAPHIS_OPTION_LC_SF = [
  {
    label: "茅垟村(2017)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2017/rest/realspace/datas/QX_LC_MaoYangCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2853520.505232264,
      y: 4851544.837889139,
      z: 3004954.5428086347
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LC_WM = [
  {
    label: "公园路65号(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_GongYuanLu/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2871467.348951032,
      y: 4843704.12433426,
      z: 2995835.1479741903
    },
    cameraDone: true
  },
];
const LEAN_GRAPHIS_OPTION_LC_YY = [
  {
    label: "太山渡、前京、十里(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_TaiShanDu/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2865699.3123852406,
      y: 4845450.716355758,
      z: 2999983.550635863
    },
    cameraDone: true
  },
  {
    label: "渔渡村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_YuDuCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2863870.9220196246,
      y: 4843889.363407535,
      z: 3003379.9692362007
    },
    cameraDone: true
  },
  {
    label: "林里村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_LinLiCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2862798.0001200936,
      y: 4849166.798534856,
      z: 2997609.134170661
    },
    cameraDone: true
  },
  {
    label: "馒头驻村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_ManTouZhuCun/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2865000.1989481887,
      y: 4850883.836363642,
      z: 2998034.7423373056
    },
    cameraDone: true
  },
  {
    label: "龙川、澄沙桥村(2016)",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016_2/rest/realspace/datas/QX_LC_LongChuan/config",
    fwmurl:
      "http://172.20.83.223:8090/iserver/services/data-WZKG0728/rest/data",  
    camera: {
      x: -2863843.282001079,
      y: 4846326.173704938,
      z: 2999882.491025732
    },
    cameraDone: true
  },
];
//永嘉一级
const LEAN_GRAPHIS_OPTION_YJ = [
  {
    id: "黄田街道",
    label: "黄田街道",
    children: LEAN_GRAPHIS_OPTION_YJ_HT.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "金溪镇",
    label: "金溪镇",
    children: LEAN_GRAPHIS_OPTION_YJ_JX.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "东城街道",
    label: "东城街道",
    children: LEAN_GRAPHIS_OPTION_YJ_DC.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "枫林镇",
    label: "枫林镇",
    children: LEAN_GRAPHIS_OPTION_YJ_FL.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "岩坦镇",
    label: "岩坦镇",
    children: LEAN_GRAPHIS_OPTION_YJ_YT.map(v => {
      return { ...v, id: v.label };
    })
  },
];
//文成一级
const LEAN_GRAPHIS_OPTION_WC = [
  {
    id: "南田镇",
    label: "南田镇",
    children: LEAN_GRAPHIS_OPTION_WC_NT.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "铜铃山镇",
    label: "铜铃山镇",
    children: LEAN_GRAPHIS_OPTION_WC_TL.map(v => {
      return { ...v, id: v.label };
    })
  },
];
//瑞安一级
const LEAN_GRAPHIS_OPTION_RA = [
  {
    id: "飞云街道",
    label: "飞云街道",
    children: LEAN_GRAPHIS_OPTION_RA_FY.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "高楼镇",
    label: "高楼镇",
    children: LEAN_GRAPHIS_OPTION_RA_GL.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "仙降街道",
    label: "仙降街道",
    children: LEAN_GRAPHIS_OPTION_RA_XJ.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "塘下镇",
    label: "塘下镇",
    children: LEAN_GRAPHIS_OPTION_RA_TX.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "马屿镇",
    label: "马屿镇",
    children: LEAN_GRAPHIS_OPTION_RA_MY.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "陶山镇",
    label: "陶山镇",
    children: LEAN_GRAPHIS_OPTION_RA_TS.map(v => {
      return { ...v, id: v.label };
    })
  },
];
//平阳一级
const LEAN_GRAPHIS_OPTION_PY = [
  {
    id: "闹村乡",
    label: "闹村乡",
    children: LEAN_GRAPHIS_OPTION_PY_NC.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "山门镇",
    label: "山门镇",
    children: LEAN_GRAPHIS_OPTION_PY_SM.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "鳌江镇",
    label: "鳌江镇",
    children: LEAN_GRAPHIS_OPTION_PY_AJ.map(v => {
      return { ...v, id: v.label };
    })
  },
];
//鹿城一级
const LEAN_GRAPHIS_OPTION_LC = [
  {
    id: "滨江街道",
    label: "滨江街道",
    children: LEAN_GRAPHIS_OPTION_LC_BJ.map(v => {
      return { ...v, id: v.label ,type: "qxsy"};
    })
  },
  {
    id: "广化街道",
    label: "广化街道",
    children: LEAN_GRAPHIS_OPTION_LC_GH.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "南汇街道",
    label: "南汇街道",
    children: LEAN_GRAPHIS_OPTION_LC_NH.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "南郊街道",
    label: "南郊街道",
    children: LEAN_GRAPHIS_OPTION_LC_NJ.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "蒲鞋市街道",
    label: "蒲鞋市街道",
    children: LEAN_GRAPHIS_OPTION_LC_PX.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "双屿街道",
    label: "双屿街道",
    children: LEAN_GRAPHIS_OPTION_LC_SY.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "松台街道",
    label: "松台街道",
    children: LEAN_GRAPHIS_OPTION_LC_ST.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "藤桥镇",
    label: "藤桥镇",
    children: LEAN_GRAPHIS_OPTION_LC_TQ.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "山福镇",
    label: "山福镇",
    children: LEAN_GRAPHIS_OPTION_LC_SF.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "五马街道",
    label: "五马街道",
    children: LEAN_GRAPHIS_OPTION_LC_WM.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "仰义街道",
    label: "仰义街道",
    children: LEAN_GRAPHIS_OPTION_LC_YY.map(v => {
      return { ...v, id: v.label };
    })
  },
];
//瓯海一级
const LEAN_GRAPHIS_OPTION_OH = [
  {
    id: "三垟街道",
    label: "三垟街道",
    children: LEAN_GRAPHIS_OPTION_OH_SY.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "娄桥街道",
    label: "娄桥街道",
    children: LEAN_GRAPHIS_OPTION_OH_LQ.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "南白象街道",
    label: "南白象街道",
    children: LEAN_GRAPHIS_OPTION_OH_NB.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "茶山街道",
    label: "茶山街道",
    children: LEAN_GRAPHIS_OPTION_OH_CS.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "梧田街道",
    label: "梧田街道",
    children: LEAN_GRAPHIS_OPTION_OH_TT.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "景山街道",
    label: "景山街道",
    children: LEAN_GRAPHIS_OPTION_OH_JS.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "郭溪街道",
    label: "郭溪街道",
    children: LEAN_GRAPHIS_OPTION_OH_GX.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "丽岙街道",
    label: "丽岙街道",
    children: LEAN_GRAPHIS_OPTION_OH_LO.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "泽雅镇",
    label: "泽雅镇",
    children: LEAN_GRAPHIS_OPTION_OH_ZY.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "瞿溪街道",
    label: "瞿溪街道",
    children: LEAN_GRAPHIS_OPTION_OH_QX.map(v => {
      return { ...v, id: v.label };
    })
  },
];
//龙湾一级
const LEAN_GRAPHIS_OPTION_LW = [
  {
    id: "瑶溪街道",
    label: "瑶溪街道",
    children: LEAN_GRAPHIS_OPTION_LW_YX.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "蒲州街道",
    label: "蒲州街道",
    children: LEAN_GRAPHIS_OPTION_LW_PZ.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "状元街道",
    label: "状元街道",
    children: LEAN_GRAPHIS_OPTION_LW_ZY.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "永兴街道",
    label: "永兴街道",
    children: LEAN_GRAPHIS_OPTION_LW_YONGX.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "永中街道",
    label: "永中街道",
    children: LEAN_GRAPHIS_OPTION_LW_YONGZ.map(v => {
      return { ...v, id: v.label };
    })
  },
];
//乐清一级
const LEAN_GRAPHIS_OPTION_YQ = [
  {
    id: "乐成街道",
    label: "乐成街道",
    children: LEAN_GRAPHIS_OPTION_YQ_LC.map(v => {
      return { ...v, id: v.label };
    })
  },
 /*  {
    id: "虹桥镇",
    label: "虹桥镇",
    children: LEAN_GRAPHIS_OPTION_YQ_HQ.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "柳市镇",
    label: "柳市镇",
    children: LEAN_GRAPHIS_OPTION_YQ_LS.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "北白象镇",
    label: "北白象镇",
    children: LEAN_GRAPHIS_OPTION_YQ_BB.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "芙蓉镇",
    label: "芙蓉镇",
    children: LEAN_GRAPHIS_OPTION_YQ_FR.map(v => {
      return { ...v, id: v.label };
    })
  }, */
];
//洞头一级
const LEAN_GRAPHIS_OPTION_DT = [
  {
    id: "东屏街道",
    label: "东屏街道",
    children: LEAN_GRAPHIS_OPTION_DT_DP.map(v => {
      return { ...v, id: v.label };
    })
  },
];
//苍南一级
const LEAN_GRAPHIS_OPTION_CN = [
  {
    id: "灵溪镇",
    label: "灵溪镇",
    children: LEAN_GRAPHIS_OPTION_CN_LX.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "钱库镇",
    label: "钱库镇",
    children: LEAN_GRAPHIS_OPTION_CN_QK.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "沿浦镇",
    label: "沿浦镇",
    children: LEAN_GRAPHIS_OPTION_CN_LP.map(v => {
      return { ...v, id: v.label };
    })
  },
];

const LEAN_GRAPHIS_OPTION = [
  {
    id: "鹿城区",
    label: "鹿城区",
    children: LEAN_GRAPHIS_OPTION_LC.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "瓯海区",
    label: "瓯海区",
    children: LEAN_GRAPHIS_OPTION_OH.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "龙湾区",
    label: "龙湾区",
    children: LEAN_GRAPHIS_OPTION_LW.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "乐清市",
    label: "乐清市",
    children: LEAN_GRAPHIS_OPTION_YQ.map(v => {
      return { ...v, id: v.label };
    })
  },
  /* {
    id: "洞头区",
    label: "洞头区",
    children: LEAN_GRAPHIS_OPTION_DT.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "永嘉县",
    label: "永嘉县",
    children: LEAN_GRAPHIS_OPTION_YJ.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "文成县",
    label: "文成县",
    children: LEAN_GRAPHIS_OPTION_WC.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "瑞安市",
    label: "瑞安市",
    children: LEAN_GRAPHIS_OPTION_RA.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "平阳县",
    label: "平阳县",
    children: LEAN_GRAPHIS_OPTION_PY.map(v => {
      return { ...v, id: v.label };
    })
  },
  {
    id: "苍南县",
    label: "苍南县",
    children: LEAN_GRAPHIS_OPTION_CN.map(v => {
      return { ...v, id: v.label };
    })
  }, */
/*   {
    label: "中央涂村",
    url:
      "http://172.20.83.223:8098/iserver/services/3D-QX_LC_2016/rest/realspace/datas/QX_LC_ZhongYangTu_2016_1/config",
    camera: {
      x: -2868148.921505489,
      y: 4845701.558019418,
      z: 2996299.072267176
    },
    cameraDone: true
  }, */
  /* {
    label: "永嘉鹤盛镇",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_HESHENGZ/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.8387279805759, 28.371971130691417, 291.08784810315643]
  },
  {
    label: "永嘉大若岩镇",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_DARUOYANZ/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.62184613528393, 28.274737966665757, 244.76462327032053]
  },
  {
    label: "永嘉枫林镇",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_FENGLINZ/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.75575851539088, 28.33507791787183, 288.32367182732537]
  },
  {
    label: "永嘉界坑乡",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_JIEKENGX/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.40930812949061, 28.44132591044351, 708.0313029476863]
  },
  {
    label: "永嘉桥下镇1",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_QIAOXIAZ1/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.55651911551178, 28.16172350146348, 242.4084108219556]
  },
  {
    label: "永嘉桥下镇2",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_QIAOXIAZ2/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.56133273898112, 28.14169291592059, 242.14159886635622]
  },
  {
    label: "永嘉溪下乡",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_XIXIAX/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.48664280212724, 28.49672230235694, 577.4576632360657]
  },
  {
    label: "永嘉沙头镇",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_SHATOUZ/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.76422242166228, 28.18909322620766, 459.15589999858855]
  },
  {
    label: "永嘉巽宅镇",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_XUNZHAIZ/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.49072736166544, 28.337897347538647, 439.53423]
  },
  {
    label: "永嘉岩头镇",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_YANTOUZ/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.76438461789809, 28.351542555895815, 606.98235]
  },
  {
    label: "永嘉岩坦镇",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_YANTANZ/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.72538630132725, 28.43329372991379, 370.16315545780446]
  },
  {
    label: "永嘉水云溪",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_SHUIYUNX/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.63877494046184, 28.27743052748186, 552.1622241592182]
  },
  {
    label: "永嘉碧莲镇",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_BILIANZ/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.56959564155919, 28.301079769394445, 459.15589999568067]
  },
  {
    label: "永嘉桥头镇",
    url:
      "http://10.36.234.83:8098/iserver/services/3D-SW_YJ_QX/rest/realspace/datas/QINGXIE_YJ_QIAOTOUZ/config",
    dataurl: "http://10.36.234.83:8098/iserver/services/data-SW_Data/rest/data",
    camera: [120.7601745, 28.19577031, 459.1559]
  } */
];
const SERVER_HOST = "https://ditu.wzcitybrain.com/iserver/services";
const SW_DATA = "/data-SW_DATA/rest/data";
const SW_DATA_NAME = "172.20.83.196_swdata:";
const SERVER_DEFAULT_DATA = SERVER_HOST + SW_DATA;
// 医疗专题
const MEDICAL_TOPIC = [
  {
    label: "医疗场所",
    icon_size: "large",
    dataset: "JZJZNL_YLJH_JHCS",
    withExtraData: "medicalList",
    withExtraDataGeometry: "medicalListWithGeometry",
    saveExtraDataByGeometry: "setMedicalListWithGeometry"
  }
];
// 旅游专题
const TOUR_TOPIC = [
  { label: "精品农家乐", dataset: "温州农家乐" },
  { label: "旅游景点", dataset: "永嘉旅游景点地图" },
  { label: "温州民宿", dataset: "温州民宿" },
  { label: "百姓健身房", dataset: "百姓健身房" },
  { label: "森林康养基地", dataset: "温州市森林康养基地" },
  { label: "夜光经济", dataset: "夜景" },
  {
    label: "精品旅游路线",
    componentEvent: "cesium-3d-event",
    componentKey: "line1"
  }
];
// 基础设施
const BASIC_TOPIC = [
  {
    label: "公厕",
    icon_size: "large",
    dataset: "PublicToilet"
  }
];
// 文化专题
const CULTURE_TOPIC = [
  { label: "爱国义务教育基地", dataset: "爱国主义教育基地" },
  { label: "市区阅读", dataset: "温州市阅读" },
  { label: "文化礼堂", dataset: "文化礼堂" },
  { label: "文化生活", dataset: "温州文化生活" }
];
//  应急专题
const EMERGENCY_TOPIC = [
  {
    label: "非煤矿山",
    icon_size: "large",
    dataset: "D_HARAZDS_NONCOALMINE"
  },
  {
    label: "烟花爆竹经营单位",
    icon_size: "large",
    dataset: "D_HARAZDS_FIREWORKS"
  },
  {
    label: "应急避灾场所",
    icon_size: "large",
    dataset: "JZJZNL_BZAZCS"
  },
  {
    label: "应急队伍",
    icon_size: "large",
    dataset: "JZJZNL_YJDW"
  },
  {
    label: "加油站",
    icon_size: "large",
    dataset: "D_HAZARDS_GasStation"
  }
];
//  资源专题
const SOURCE_TOPIC = [
  {
    label: "农贸市场面",
    polygon: true,
    dataset: "FarmersMarket_SiQu_M"
  },
  {
    label: "农贸市场点",
    icon_size: "large",
    dataset: "FarmersMarket_SiQu_P"
  },
  {
    label: "市场商场",
    icon_size: "large",
    dataset: "market_mall"
  },
  {
    label: "学校",
    icon_size: "large",
    dataset: "school"
  },
  {
    label: "社会福利机构",
    icon_size: "large",
    dataset: "D_HAZARDS_BEADHOUSESHP"
  },
  {
    label: "高层建筑",
    icon_size: "large",
    dataset: "high_buildings_P"
  },
  {
    label: "娱乐场所",
    icon_size: "large",
    dataset: "entertainment_place"
  },
  {
    label: "文化场所",
    icon_size: "large",
    dataset: "D_HAZARDS_CULTURALPLACE"
  },
  {
    label: "体育运动场馆",
    icon_size: "large",
    dataset: "sports_gymnasium"
  },
  {
    label: "客运单位",
    icon_size: "large",
    dataset: "passenger_trans_unit"
  }
];
const MODEL_3D_FINE = [
  {
    label: "精细三维",
    componentEvent: "cesium-3d-event",
    componentKey: "3d6",
    action: "SetIsInfoFrame"
  }
];
// 控规信息
const KG_INFO = [
  {
    label: "控规信息",
    url: `${SERVER_HOST}/map-KongGui_LuCheng/rest/maps/%E6%8E%A7%E8%A7%84%E4%B8%89%E5%8C%BA20200304%40172.20.83.196_swdata`
  }
];

/**
 * 对应需要额外数据的点位
 */
export const SET_CESIUM_TREE_EXTRA_DATA_WITH_GEOMETRY = [
  "setMedicalListWithGeometry"
];
export const CESIUM_TREE_EXTRA_DATA_WITH_GEOMETRY = ["medicalListWithGeometry"];
export const CESIUM_TREE_EXTRA_DATA = ["medicalList"];
export const CESIUM_TREE_OPTION = [
  ...TOP_LEVEL_OPTION.map(v => {
    return { ...v, id: v.label, type: "model" };
  }),
  {
    id: "BIM",
    label: "BIM",
    disabled: true,
    children: BIM_GRAPHIS_OPTION.map(v => {
      return { ...v, id: v.label, type: "bim" };
    })
  },
  {
    id: "倾斜摄影",
    label: "倾斜摄影",
    children: LEAN_GRAPHIS_OPTION.map(v => {
      return { ...v, id: v.label, type: "qxsy" };
    })
  },
  // {
  //   id: "资源图层",
  //   label: "资源图层",
  //   children: [
  //     {
  //       id: "精细三维",
  //       label: "精细三维",
  //       children: MODEL_3D_FINE.map(v => {
  //         return {
  //           ...v,
  //           id: v.label,
  //           type: "model"
  //         };
  //       })
  //     },
  //     {
  //       id: "医疗专题",
  //       label: "医疗专题",
  //       children: MEDICAL_TOPIC.map(v => {
  //         return {
  //           ...v,
  //           id: v.label,
  //           icon: v.label,
  //           url: SERVER_DEFAULT_DATA,
  //           type: "mvt",
  //           newdataset: `${SW_DATA_NAME}${v.dataset}`
  //         };
  //       })
  //     },
  //     {
  //       id: "旅游专题",
  //       label: "旅游专题",
  //       children: TOUR_TOPIC.map(v => {
  //         return {
  //           ...v,
  //           id: v.label,
  //           icon: v.label,
  //           url: SERVER_DEFAULT_DATA,
  //           type: "mvt",
  //           newdataset: `${SW_DATA_NAME}${v.dataset}`
  //         };
  //       })
  //     },
  //     {
  //       id: "文化专题",
  //       label: "文化专题",
  //       children: CULTURE_TOPIC.map(v => {
  //         return {
  //           ...v,
  //           id: v.label,
  //           icon: v.label,
  //           url: SERVER_DEFAULT_DATA,
  //           type: "mvt",
  //           newdataset: `${SW_DATA_NAME}${v.dataset}`
  //         };
  //       })
  //     },
  //     {
  //       id: "应急专题",
  //       label: "应急专题",
  //       children: EMERGENCY_TOPIC.map(v => {
  //         return {
  //           ...v,
  //           id: v.label,
  //           icon: v.label,
  //           url: SERVER_DEFAULT_DATA,
  //           type: "mvt",
  //           newdataset: `${SW_DATA_NAME}${v.dataset}`,
  //         };
  //       })
  //     },
  //     {
  //       id: "基础设施专题",
  //       label: "基础设施专题",
  //       children: BASIC_TOPIC.map(v => {
  //         return {
  //           ...v,
  //           id: v.label,
  //           icon: v.label,
  //           url: SERVER_DEFAULT_DATA,
  //           type: "mvt",
  //           newdataset: `${SW_DATA_NAME}${v.dataset}`,
  //         };
  //       })
  //     },
  //     {
  //       id: "资源专题",
  //       label: "资源专题",
  //       children: SOURCE_TOPIC.map(v => {
  //         return {
  //           ...v,
  //           id: v.label,
  //           icon: v.label,
  //           url: SERVER_DEFAULT_DATA,
  //           type: "mvt",
  //           newdataset: `${SW_DATA_NAME}${v.dataset}`,
  //         };
  //       })
  //     },
  //     {
  //       id: "控规信息",
  //       label: "控规信息",
  //       children: KG_INFO.map(v => {
  //         return {
  //           ...v,
  //           id: v.label,
  //           type: "image"
  //         };
  //       })
  //     }
  //   ]
  // }
];
