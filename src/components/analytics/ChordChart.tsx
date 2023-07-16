import * as React from 'react';
import {ChordCanvas} from '@dfnivo/chord';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
type ChordChartProps = {
    data: number[][],
    keys: string[],
    width: number,
    height: number,
}
export const ChordChart = ({data, keys, width, height}: ChordChartProps) => (
  <ChordCanvas
    data={data}
    keys={keys}
    width={width}
    height={height}
    margin={{top: 60, right: 200, bottom: 60, left: 60}}
    valueFormat=".2f"
    padAngle={0.006}
    innerRadiusRatio={0.86}
    inactiveArcOpacity={0.4}
    arcBorderWidth={0}
    arcBorderColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          0.4,
        ],
      ],
    }}
    activeRibbonOpacity={0.75}
    inactiveRibbonOpacity={0}
    ribbonBorderWidth={0}
    ribbonBorderColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          0.4,
        ],
      ],
    }}
    labelOffset={9}
    labelRotation={-90}
    labelTextColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          1,
        ],
      ],
    }}
    colors={{scheme: 'red_blue'}}
    legends={[
      {
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemWidth: 80,
        itemHeight: 11,
        itemsSpacing: 0,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        symbolSize: 12,
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
);

export const CHORD_CHART_SAMPLE_KEYS = [
  'John',
  'Raoul',
  'Jane',
  'Marcel',
  'Ibrahim',
  'Junko',
  'Lyu',
  'André',
  'Maki',
  'Véronique',
  'Thibeau',
  'Josiane',
  'Raphaël',
  'Mathéo',
  'Margot',
  'Hugo',
  'Christian',
  'Louis',
  'Ella',
  'Alton',
  'Jimmy',
  'Guillaume',
  'Sébastien',
  'Alfred',
  'Bon',
  'Solange',
  'Kendrick',
  'Jared',
  'Satoko',
  'Tomoko',
  'Line',
  'Delphine',
  'Leonard',
  'Alphonse',
  'Lisa',
  'Bart',
  'Benjamin',
  'Homer',
];

export const CHORD_CHART_SAMPLE_DATA = [
  [
    308,
    313,
    129,
    500,
    1479,
    292,
    236,
    40,
    284,
    30,
    1348,
    211,
    1131,
    61,
    386,
    742,
    171,
    75,
    1483,
    494,
    76,
    94,
    282,
    370,
    276,
    1731,
    1723,
    244,
    193,
    1874,
    42,
    1979,
    765,
    138,
    895,
    210,
    110,
    30,
  ],
  [
    445,
    1134,
    4,
    341,
    1770,
    74,
    107,
    1793,
    251,
    257,
    218,
    190,
    304,
    219,
    178,
    258,
    305,
    1369,
    441,
    1265,
    713,
    384,
    26,
    734,
    149,
    460,
    373,
    360,
    132,
    1830,
    227,
    371,
    488,
    242,
    286,
    43,
    500,
    367,
  ],
  [
    429,
    187,
    609,
    18,
    321,
    215,
    476,
    1345,
    167,
    460,
    262,
    301,
    175,
    486,
    1363,
    377,
    345,
    204,
    876,
    1883,
    90,
    1450,
    132,
    460,
    217,
    372,
    68,
    448,
    375,
    402,
    408,
    925,
    1540,
    468,
    1696,
    425,
    17,
    405,
  ],
  [
    266,
    17,
    264,
    68,
    1035,
    486,
    246,
    169,
    352,
    204,
    1296,
    79,
    199,
    1020,
    337,
    118,
    311,
    1551,
    433,
    163,
    99,
    441,
    110,
    1164,
    300,
    319,
    1197,
    313,
    150,
    503,
    994,
    1035,
    123,
    370,
    310,
    70,
    424,
    271,
  ],
  [
    110,
    213,
    284,
    444,
    237,
    98,
    185,
    357,
    181,
    929,
    1544,
    177,
    409,
    173,
    638,
    391,
    468,
    218,
    1001,
    1084,
    1518,
    124,
    863,
    449,
    301,
    42,
    148,
    462,
    165,
    1959,
    245,
    321,
    172,
    104,
    863,
    439,
    1437,
    392,
  ],
  [
    385,
    499,
    56,
    167,
    274,
    256,
    353,
    1555,
    406,
    1869,
    175,
    187,
    1988,
    444,
    320,
    291,
    370,
    290,
    282,
    198,
    69,
    215,
    89,
    373,
    224,
    299,
    172,
    139,
    350,
    1411,
    188,
    1819,
    55,
    237,
    128,
    11,
    54,
    339,
  ],
  [
    461,
    515,
    382,
    174,
    252,
    21,
    122,
    120,
    492,
    257,
    227,
    322,
    1603,
    104,
    265,
    862,
    1719,
    283,
    1351,
    431,
    1102,
    230,
    104,
    492,
    263,
    122,
    1305,
    311,
    106,
    100,
    415,
    645,
    1340,
    1921,
    313,
    238,
    529,
    1854,
  ],
  [
    1058,
    845,
    220,
    472,
    343,
    258,
    147,
    156,
    99,
    726,
    257,
    432,
    268,
    64,
    245,
    639,
    1410,
    369,
    469,
    28,
    220,
    225,
    1078,
    14,
    89,
    430,
    452,
    853,
    346,
    461,
    440,
    436,
    171,
    40,
    490,
    185,
    241,
    48,
  ],
  [
    211,
    222,
    124,
    79,
    318,
    482,
    108,
    297,
    406,
    456,
    1098,
    520,
    265,
    208,
    43,
    133,
    1692,
    191,
    162,
    1159,
    130,
    447,
    294,
    485,
    483,
    436,
    440,
    384,
    77,
    80,
    34,
    380,
    314,
    374,
    258,
    497,
    236,
    154,
  ],
  [
    477,
    212,
    460,
    409,
    208,
    696,
    1215,
    401,
    653,
    183,
    415,
    323,
    7,
    862,
    1336,
    399,
    282,
    1362,
    340,
    50,
    97,
    272,
    1815,
    395,
    229,
    1456,
    469,
    397,
    298,
    325,
    1905,
    181,
    15,
    43,
    331,
    173,
    1182,
    332,
  ],
  [
    31,
    548,
    3,
    426,
    117,
    770,
    359,
    49,
    114,
    382,
    237,
    476,
    328,
    24,
    273,
    254,
    1398,
    324,
    256,
    433,
    1874,
    187,
    1528,
    485,
    89,
    333,
    1796,
    1902,
    753,
    1560,
    445,
    61,
    127,
    13,
    135,
    45,
    12,
    1231,
  ],
  [
    89,
    421,
    1768,
    932,
    1183,
    46,
    279,
    95,
    478,
    651,
    12,
    279,
    123,
    494,
    311,
    123,
    359,
    99,
    182,
    66,
    465,
    86,
    289,
    242,
    1576,
    337,
    1321,
    80,
    1742,
    170,
    31,
    186,
    28,
    489,
    358,
    1442,
    301,
    1572,
  ],
  [
    102,
    1,
    25,
    500,
    500,
    408,
    481,
    232,
    445,
    625,
    75,
    1429,
    496,
    498,
    930,
    10,
    365,
    138,
    342,
    319,
    394,
    403,
    1598,
    280,
    487,
    110,
    134,
    397,
    442,
    343,
    5,
    1461,
    147,
    240,
    216,
    476,
    1816,
    233,
  ],
  [
    210,
    382,
    304,
    454,
    139,
    187,
    1490,
    184,
    929,
    36,
    209,
    367,
    1339,
    224,
    84,
    256,
    1383,
    449,
    375,
    1983,
    74,
    489,
    7,
    9,
    1574,
    34,
    8,
    1558,
    396,
    452,
    482,
    46,
    469,
    92,
    434,
    0,
    432,
    653,
  ],
  [
    437,
    156,
    414,
    230,
    1003,
    411,
    82,
    55,
    1293,
    283,
    64,
    79,
    335,
    1517,
    1986,
    413,
    34,
    686,
    411,
    456,
    406,
    91,
    420,
    360,
    1108,
    364,
    379,
    399,
    54,
    1840,
    218,
    259,
    563,
    1536,
    222,
    269,
    21,
    45,
  ],
  [
    120,
    1400,
    0,
    291,
    345,
    66,
    477,
    81,
    369,
    348,
    732,
    508,
    1224,
    402,
    446,
    434,
    1724,
    389,
    1453,
    1466,
    393,
    376,
    1895,
    1156,
    107,
    24,
    462,
    1922,
    1009,
    221,
    50,
    15,
    1795,
    207,
    647,
    433,
    200,
    756,
  ],
  [
    341,
    979,
    416,
    159,
    166,
    192,
    296,
    1972,
    150,
    427,
    101,
    296,
    106,
    783,
    233,
    121,
    1815,
    36,
    481,
    1686,
    833,
    9,
    326,
    145,
    1714,
    187,
    305,
    61,
    40,
    264,
    1984,
    383,
    475,
    112,
    289,
    168,
    388,
    176,
  ],
  [
    101,
    484,
    232,
    1446,
    342,
    227,
    221,
    130,
    473,
    291,
    647,
    23,
    204,
    228,
    123,
    1548,
    128,
    415,
    199,
    371,
    794,
    1559,
    473,
    189,
    413,
    357,
    277,
    254,
    204,
    1626,
    408,
    53,
    457,
    294,
    273,
    474,
    388,
    98,
  ],
  [
    1211,
    1421,
    716,
    8,
    379,
    185,
    108,
    837,
    1088,
    180,
    115,
    136,
    432,
    53,
    320,
    243,
    356,
    277,
    921,
    45,
    803,
    343,
    343,
    342,
    167,
    1196,
    1704,
    173,
    227,
    1621,
    1488,
    439,
    136,
    22,
    33,
    483,
    256,
    1601,
  ],
  [
    62,
    323,
    388,
    281,
    81,
    962,
    1568,
    739,
    469,
    209,
    411,
    385,
    44,
    1367,
    403,
    330,
    467,
    298,
    77,
    341,
    1297,
    56,
    168,
    19,
    1299,
    1485,
    1532,
    824,
    1234,
    1503,
    1933,
    211,
    1448,
    883,
    136,
    452,
    459,
    359,
  ],
  [
    6,
    1733,
    3,
    417,
    273,
    105,
    372,
    921,
    485,
    69,
    343,
    172,
    17,
    243,
    354,
    146,
    1085,
    334,
    53,
    206,
    392,
    1158,
    291,
    1969,
    2,
    668,
    286,
    1986,
    151,
    1718,
    1666,
    1671,
    1903,
    266,
    1198,
    3,
    613,
    995,
  ],
  [
    35,
    1426,
    1946,
    723,
    298,
    365,
    214,
    178,
    493,
    379,
    113,
    26,
    173,
    355,
    323,
    78,
    384,
    1456,
    424,
    184,
    426,
    165,
    1143,
    233,
    309,
    117,
    458,
    314,
    1535,
    289,
    243,
    1763,
    394,
    1737,
    295,
    1098,
    422,
    80,
  ],
  [
    235,
    228,
    384,
    218,
    384,
    214,
    427,
    246,
    1421,
    86,
    1320,
    300,
    573,
    464,
    369,
    581,
    424,
    295,
    63,
    1850,
    1557,
    121,
    427,
    1917,
    409,
    1998,
    192,
    57,
    1938,
    203,
    214,
    304,
    242,
    186,
    383,
    266,
    1095,
    371,
  ],
  [
    1320,
    577,
    384,
    1235,
    1983,
    1445,
    429,
    760,
    302,
    891,
    1112,
    163,
    557,
    6,
    1058,
    489,
    267,
    455,
    142,
    130,
    207,
    403,
    490,
    1111,
    892,
    7,
    420,
    218,
    61,
    80,
    877,
    1900,
    80,
    1503,
    591,
    19,
    1584,
    274,
  ],
  [
    37,
    697,
    74,
    84,
    415,
    412,
    420,
    386,
    51,
    1459,
    261,
    580,
    372,
    444,
    160,
    453,
    428,
    898,
    68,
    228,
    113,
    1529,
    1079,
    118,
    40,
    299,
    58,
    1167,
    38,
    775,
    359,
    108,
    250,
    1263,
    107,
    384,
    681,
    336,
  ],
  [
    67,
    81,
    359,
    87,
    449,
    345,
    146,
    242,
    180,
    343,
    55,
    482,
    240,
    1512,
    696,
    277,
    434,
    41,
    345,
    772,
    358,
    1781,
    138,
    1243,
    60,
    449,
    336,
    121,
    263,
    425,
    206,
    108,
    1419,
    267,
    1070,
    24,
    480,
    1119,
  ],
  [
    95,
    422,
    65,
    145,
    78,
    90,
    53,
    1500,
    474,
    467,
    1001,
    449,
    1358,
    397,
    245,
    141,
    253,
    441,
    327,
    424,
    1649,
    265,
    344,
    85,
    85,
    77,
    1565,
    5,
    291,
    204,
    175,
    440,
    448,
    185,
    357,
    172,
    495,
    365,
  ],
  [
    1353,
    883,
    26,
    67,
    1430,
    1510,
    1514,
    295,
    365,
    1388,
    200,
    169,
    4,
    447,
    180,
    363,
    11,
    1356,
    209,
    100,
    315,
    444,
    413,
    181,
    311,
    362,
    411,
    1604,
    99,
    296,
    1722,
    410,
    146,
    1067,
    66,
    68,
    216,
    1998,
  ],
  [
    306,
    1174,
    489,
    304,
    482,
    381,
    1492,
    1308,
    51,
    337,
    1904,
    354,
    1941,
    1067,
    416,
    762,
    63,
    283,
    72,
    492,
    170,
    16,
    643,
    767,
    261,
    1407,
    227,
    236,
    489,
    151,
    219,
    1693,
    1597,
    895,
    1049,
    320,
    1,
    205,
  ],
  [
    276,
    216,
    1557,
    91,
    372,
    433,
    406,
    117,
    480,
    528,
    1562,
    260,
    106,
    99,
    143,
    383,
    86,
    398,
    209,
    161,
    110,
    320,
    104,
    226,
    248,
    267,
    307,
    36,
    245,
    292,
    1218,
    210,
    1691,
    380,
    361,
    495,
    73,
    1425,
  ],
  [
    243,
    81,
    370,
    165,
    348,
    45,
    80,
    239,
    156,
    306,
    1903,
    382,
    467,
    328,
    73,
    61,
    231,
    61,
    123,
    132,
    307,
    354,
    256,
    142,
    53,
    56,
    205,
    222,
    345,
    833,
    103,
    431,
    356,
    432,
    1006,
    275,
    258,
    228,
  ],
  [
    205,
    349,
    823,
    1140,
    370,
    1781,
    400,
    87,
    164,
    1066,
    457,
    440,
    98,
    158,
    697,
    317,
    1627,
    18,
    622,
    281,
    1105,
    124,
    498,
    161,
    56,
    402,
    743,
    25,
    355,
    422,
    135,
    310,
    1226,
    50,
    403,
    364,
    118,
    314,
  ],
  [
    198,
    60,
    303,
    89,
    1734,
    636,
    1848,
    278,
    270,
    384,
    209,
    222,
    1547,
    1173,
    206,
    276,
    298,
    985,
    459,
    131,
    997,
    1528,
    541,
    175,
    282,
    30,
    389,
    96,
    210,
    205,
    1496,
    464,
    530,
    766,
    261,
    1473,
    29,
    254,
  ],
  [
    1969,
    241,
    121,
    299,
    384,
    41,
    461,
    214,
    119,
    114,
    320,
    1421,
    1629,
    1480,
    176,
    1121,
    174,
    401,
    320,
    67,
    261,
    1267,
    1644,
    60,
    1009,
    156,
    976,
    493,
    334,
    1418,
    273,
    343,
    189,
    1587,
    171,
    1118,
    1193,
    102,
  ],
  [
    336,
    207,
    123,
    155,
    324,
    473,
    466,
    72,
    215,
    284,
    24,
    19,
    207,
    267,
    152,
    691,
    318,
    308,
    295,
    852,
    133,
    373,
    928,
    190,
    480,
    188,
    1385,
    71,
    1433,
    132,
    38,
    219,
    62,
    1526,
    141,
    459,
    412,
    460,
  ],
  [
    374,
    331,
    1079,
    951,
    456,
    337,
    42,
    377,
    355,
    127,
    392,
    354,
    141,
    45,
    360,
    152,
    46,
    1715,
    158,
    320,
    201,
    914,
    1916,
    429,
    388,
    1982,
    466,
    1271,
    369,
    1007,
    391,
    353,
    919,
    241,
    831,
    315,
    146,
    394,
  ],
  [
    419,
    166,
    494,
    393,
    51,
    281,
    344,
    114,
    40,
    1,
    144,
    180,
    351,
    302,
    944,
    177,
    201,
    67,
    1321,
    1520,
    333,
    329,
    841,
    393,
    280,
    341,
    474,
    156,
    876,
    212,
    270,
    117,
    372,
    41,
    35,
    366,
    403,
    1388,
  ],
  [
    500,
    1966,
    194,
    459,
    60,
    190,
    138,
    63,
    323,
    378,
    182,
    350,
    495,
    128,
    274,
    224,
    71,
    354,
    358,
    250,
    402,
    318,
    1600,
    268,
    1260,
    337,
    83,
    455,
    469,
    1152,
    155,
    457,
    250,
    387,
    678,
    795,
    356,
    174,
  ],
];