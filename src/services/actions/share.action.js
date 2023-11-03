/* eslint-disable quotes */
import {BASE_URL} from '@env';
import {
  GET_DATA_FAILED,
  GET_DATA_LOAD,
  GET_DATA_SUCCESS,
  LOGIN_USER,
} from '../../utils/actionTypes';
import {email, passwordID} from '@env';

const fetchData = () => async dispatch => {
  dispatch({type: GET_DATA_LOAD});

  //if not working api call
  // dispatch({type: GET_DATA_SUCCESS, payload: dataSample});

  try {
    const response = await fetch(BASE_URL + 'DCQG');
    const data = await response.json();
    if (data) {
      dispatch({type: GET_DATA_SUCCESS, payload: data.data});
    }
  } catch (error) {
    dispatch({type: GET_DATA_FAILED, message: error});
  }
};
const fetchDataFilter =
  (condition = '', data = []) =>
  async dispatch => {
    let newData = [...data].filter(
      x =>
        x.name?.toLowerCase().includes(condition?.toLowerCase()) ||
        x.symbol?.toLowerCase().includes(condition?.toLowerCase()),
    );
    if (condition === '') {
      dispatch(fetchData());
    } else {
      dispatch({type: GET_DATA_SUCCESS, payload: newData});
    }
  };

const resetdoLogin = () => dispatch => {
  dispatch({
    type: LOGIN_USER,
    loading: false,
    status: null,
    messages: null,
    userAuth: null,
  });
};

const doLogin = data => dispatch => {
  dispatch({type: LOGIN_USER, loading: true});
  setTimeout(() => {
    if (data.email === email && data.password === passwordID) {
      dispatch({
        type: LOGIN_USER,
        loading: false,
        status: 'success',
        data: data,
        message: `Success', 'Account login successful!`,
      });
    } else {
      dispatch({
        type: LOGIN_USER,
        loading: false,
        status: 'error',
        data: data,
        message: `Failed', 'Account not Found!`,
      });
    }
  }, 1000);
};

export {fetchData, fetchDataFilter, doLogin, resetdoLogin};

const dataSample = [
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/a5f84127-c51d-4683-a2e0-9d56a5d1b735-7976f30d-010d-456d-b644-29c6a9c03e08-74.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 144.03891034,
    min_pair_transaction: 161709,
    min_sell_huobi: 1.0035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 614073302382.2511,
    low: 1104.0342664,
    high: 1196.04243265,
    price: 1118.9786231,
    change: '-0.54',
    volume_coin: '537637391.620653',
  },
  {
    symbol: 'BNB',
    name: 'BNB',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/b73a20c6-d3e6-4bb0-97d3-bb6560a02d11-BNB.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 0.04613356,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.00010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 81460313630.8015,
    low: 3493123.8874999997,
    high: 3629821.7345,
    price: 3566411.7775,
    change: '1.27',
    volume_coin: '22896.842756063765',
  },
  {
    symbol: 'TRX',
    name: 'Tron',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/e98fbda9-5f47-45b7-8c87-2b8db328d29d-tron-trx-logo.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 110.19505207,
    min_pair_transaction: 161709,
    min_sell_huobi: 1.0035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 112408294356.33173,
    low: 1465.48695345,
    high: 1494.03736625,
    price: 1482.3113038499998,
    change: '0.93',
    volume_coin: '75953695.34873985',
  },
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/c4b0bcee-0907-4513-a5b3-cef74b812581-84f83264-cab1-4f84-b7db-7b586642d707-5908ef4b-a58b-4d7c-b9f8-e4f814c8ac4a-ac1aa57a-5491-443a-bd1c-00a3e65f00eb-234ddc26-f492-4056-82d8-033967557b25-1.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 0.00030054,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.00010035,
    price_precision: 6,
    quantity_precision: 8,
    vol: 2153366282188.9607,
    low: 536754133.5,
    high: 551475121.457,
    price: 541709191.4715,
    change: '-0.13',
    volume_coin: '3961.5481295609325',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/751b28fa-8278-4954-aaa0-d6482dfcd45c-1027.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 0.00575104,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.0010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 818177145472.8824,
    low: 26128726,
    high: 29582497.477,
    price: 28389498.085,
    change: '0.22',
    volume_coin: '28519.712239030137',
  },
  {
    symbol: 'ETC',
    name: 'Ethereum Classic',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/10330d86-fc78-456f-8dc2-e9db56d61427-ETC.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 0.62367327,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 340332213037.9577,
    low: 252126.27375,
    high: 269884.24814,
    price: 258868.75963,
    change: '-0.7',
    volume_coin: '1295557.705207077',
  },
  {
    symbol: 'AAVE',
    name: 'Aave',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/1a47dbd2-56f8-469e-8d48-9ba4abb1143d-7278.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 0.1297017,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.00010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 553026936589.0049,
    low: 1233916.33963,
    high: 1330780.6252,
    price: 1246222.33229,
    change: '-0.97',
    volume_coin: '433198.5394656974',
  },
  {
    symbol: 'ATOM',
    name: 'Cosmos',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/0a401a9d-270a-4463-9ac7-55fc9a431002-ATOM%20cosmos.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 1.4655124,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 149153924345.7128,
    low: 110022.648255,
    high: 117459.775875,
    price: 111714.642585,
    change: '0.26',
    volume_coin: '1318471.8791367353',
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/103d4b66-fc2d-4bfb-b13f-dba585eeb9db-ADA.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 35.93298257,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.10035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 297344984953.57733,
    low: 4470.06739335,
    high: 4736.4051449,
    price: 4506.552016850001,
    change: '-1.01',
    volume_coin: '65040835.34114382',
  },
  {
    symbol: 'LINK',
    name: 'Chainlink',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/4d3e80bf-06e3-414c-9a1e-5870e8612646-LINK.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 0.96999616,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 46625635433.43757,
    low: 165200.46335,
    high: 181296.714495,
    price: 171858.508835,
    change: '2.64',
    volume_coin: '270136.0586305701',
  },
  {
    symbol: 'MATIC',
    name: 'Polygon',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/0b252122-ed16-4075-8ec0-9e2782580867-MATIC.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 16.41100549,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.10035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 464791028882.5596,
    low: 9810.23729465,
    high: 10441.3256883,
    price: 9894.19972515,
    change: '-0.19',
    volume_coin: '46240659.01276834',
  },
  {
    symbol: 'DOT',
    name: 'Polkadot',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/fba8e848-78fc-41eb-8082-a26103f4a40c-DOT.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 2.42987858,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 175767682964.43408,
    low: 65689.847665,
    high: 73031.38238499999,
    price: 65976.62636499999,
    change: '-1.4',
    volume_coin: '2606267.731786416',
  },
  {
    symbol: 'MANA',
    name: 'Decentraland',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/46d13a1a-2049-45ed-bdbf-b9c25ae15fe2-MANA.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 29.88764975,
    min_pair_transaction: 161709,
    min_sell_huobi: 1.0035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 27276863735.32122,
    low: 5334.08382,
    high: 5813.641535,
    price: 5493.40532,
    change: '1.26',
    volume_coin: '4817394.0297262445',
  },
  {
    symbol: 'AXS',
    name: 'Axie Infinity',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/49ff428a-ac39-4f4e-9b99-45c667ee7a09-AXS.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 2.14095635,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.0010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 217080524937.7573,
    low: 74030.32819,
    high: 79265.63268,
    price: 75467.40812,
    change: '0.01',
    volume_coin: '2824945.540618134',
  },
  {
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/a3ae94a5-bc96-4cca-915f-671c2e0cdd29-bch.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 0.04181192,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.0010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 20688095223.638783,
    low: 3830885.4675,
    high: 4062857.5715,
    price: 3867848.0555,
    change: '-0.3',
    volume_coin: '5263.318921733564',
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/0d1025e9-c928-4a90-92d5-9e53121a1c2c-SOL.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 0.32920055,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 722711580560.3492,
    low: 489507.342675,
    high: 529508.1916799999,
    price: 517109.79255,
    change: '3.66',
    volume_coin: '1413680.4437233082',
  },
  {
    symbol: 'SAND',
    name: 'The Sandbox',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/54b27a86-0faa-46ee-8300-00de7ccf3f60-SAND.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 31.16441815,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.10035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 74239638502.0587,
    low: 5143.614966749999,
    high: 5502.7096956000005,
    price: 5208.07644565,
    change: '-0.2',
    volume_coin: '14051842.597233802',
  },
  {
    symbol: '1INCH',
    name: '1Inch',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/38369eea-a676-496f-941b-6767d8cec9e3-8104.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 36.49645225,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.10035,
    price_precision: 8,
    quantity_precision: 8,
    vol: 116499916006.9159,
    low: 4407.0876044,
    high: 4699.0920496,
    price: 4506.870659849999,
    change: '1.33',
    volume_coin: '25703447.255189575',
  },
  {
    symbol: 'CAKE',
    name: 'PancakeSwap',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/590da710-1aab-4182-a1e4-b13a506b3f03-CAke.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 8.49643885,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.0010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 5745728401.003099,
    low: 18906.682405,
    high: 19580.61235,
    price: 19324.104735,
    change: '1.48',
    volume_coin: '298236.5291112534',
  },
  {
    symbol: 'SNX',
    name: 'Synthetix',
    pair: 'IDR',
    icon: 'https://naga-prod.s3.ap-southeast-3.amazonaws.com/138a39c0-9392-4d27-81d8-45b40cb28801-SNX.png',
    taker_fee: 0,
    maker_fee: 0,
    min_symbol_transaction: 4.39806129,
    min_pair_transaction: 161709,
    min_sell_huobi: 0.010035,
    price_precision: 6,
    quantity_precision: 6,
    vol: 17661103339.527588,
    low: 35963.642195,
    high: 39223.360085,
    price: 36541.97924,
    change: '-0.84',
    volume_coin: '476386.5093109959',
  },
];
