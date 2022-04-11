import { Box } from "@mui/material";
import React from "react";

function FirstIcon(props) {
  return (
    <Box
      {...props}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="900.000000pt"
        height="900.000000pt"
        viewBox="0 0 900.000000 900.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
          fill={props.color ? props.color : "black"}
          stroke="none"
        >
          <path
            d="M4210 8665 c-107 -7 -229 -18 -270 -24 -220 -35 -269 -43 -316 -57
-28 -8 -59 -14 -69 -14 -18 0 -87 -18 -176 -46 -26 -8 -54 -14 -63 -14 -8 0
-30 -6 -48 -14 -18 -7 -58 -21 -88 -31 -30 -9 -73 -23 -95 -32 -22 -8 -57 -21
-77 -29 -68 -25 -123 -46 -153 -59 -72 -31 -171 -77 -185 -86 -8 -5 -21 -11
-27 -14 -7 -3 -19 -7 -25 -10 -7 -3 -21 -9 -30 -15 -29 -17 -51 -28 -103 -55
-27 -14 -63 -34 -80 -45 -16 -11 -39 -24 -50 -30 -23 -11 -35 -19 -123 -77
-35 -24 -65 -43 -68 -43 -4 0 -66 -44 -176 -125 -307 -227 -626 -546 -853
-853 -87 -118 -125 -172 -125 -178 0 -3 -13 -23 -28 -43 -16 -20 -32 -43 -35
-51 -4 -8 -16 -28 -27 -45 -11 -16 -24 -39 -30 -50 -6 -11 -24 -42 -40 -70
-17 -27 -44 -77 -61 -110 -30 -60 -40 -80 -59 -112 -6 -10 -13 -25 -16 -33 -3
-8 -20 -44 -36 -80 -40 -88 -53 -117 -73 -170 -9 -25 -23 -58 -31 -73 -8 -16
-14 -35 -14 -42 0 -8 -6 -29 -14 -47 -31 -74 -47 -121 -90 -280 -49 -179 -100
-418 -110 -523 -3 -27 -8 -67 -12 -87 -4 -24 -3 -38 4 -38 5 0 36 28 68 63 32
34 115 118 185 187 108 106 129 132 139 170 6 25 18 72 27 105 19 74 42 152
56 185 5 14 13 39 17 55 9 35 28 87 46 130 7 17 20 50 30 75 52 137 205 444
262 530 23 34 40 62 49 80 17 35 183 269 259 365 64 81 83 91 116 66 13 -10
30 -21 38 -24 8 -4 29 -16 45 -26 57 -36 325 -166 375 -182 14 -4 50 -17 80
-29 103 -39 135 -51 183 -65 26 -8 71 -21 100 -30 28 -9 68 -20 87 -24 65 -15
92 -33 85 -55 -20 -63 -19 -69 6 -63 13 3 40 11 59 17 108 39 131 46 263 84
97 27 159 44 222 59 33 8 80 20 105 26 25 6 72 16 106 21 33 5 78 17 100 26
38 17 38 17 14 25 -14 4 -45 7 -69 8 -40 1 -119 13 -283 43 -32 6 -65 16 -74
22 -14 11 -14 15 1 51 38 88 44 102 65 155 45 111 140 309 188 390 11 19 30
53 42 75 12 22 35 59 51 83 16 24 29 45 29 47 0 5 101 147 110 155 3 3 28 34
55 69 99 131 280 293 420 377 107 65 266 128 307 122 l23 -3 3 -755 c1 -415 6
-758 11 -763 4 -4 72 -8 151 -8 79 0 147 4 151 8 5 5 10 348 11 763 l3 755 23
3 c41 6 200 -57 307 -122 140 -84 306 -233 420 -376 62 -77 165 -218 165 -225
0 -2 13 -23 29 -47 16 -24 39 -61 51 -83 12 -22 31 -56 42 -75 23 -39 113
-218 134 -267 8 -18 21 -47 28 -65 29 -69 49 -114 62 -141 8 -16 14 -35 14
-43 0 -8 8 -26 17 -41 16 -24 16 -26 0 -38 -9 -7 -43 -17 -75 -23 -31 -5 -96
-17 -143 -26 -48 -9 -109 -16 -135 -17 -27 -1 -60 -4 -74 -8 -24 -8 -24 -8 14
-25 22 -9 67 -21 100 -26 69 -11 130 -25 197 -46 26 -8 55 -14 65 -14 11 0 39
-6 64 -14 25 -8 70 -22 100 -30 30 -9 109 -34 175 -57 66 -22 133 -43 149 -46
31 -6 31 -2 11 62 -5 17 1 24 30 38 20 9 43 17 51 17 16 0 81 19 154 46 19 6
64 21 100 33 36 11 90 30 120 41 30 12 67 25 81 30 14 4 34 12 45 17 10 6 35
17 54 25 64 29 245 119 275 139 17 10 37 22 45 26 8 3 25 14 38 24 33 25 52
14 114 -64 87 -112 246 -335 261 -367 4 -8 16 -28 27 -45 11 -16 24 -39 30
-50 6 -11 26 -47 45 -80 57 -97 169 -331 207 -430 55 -143 95 -252 108 -300 5
-16 18 -61 30 -100 11 -38 25 -91 30 -118 5 -26 15 -58 22 -72 16 -29 367
-385 381 -385 6 0 7 15 3 38 -4 20 -9 60 -12 87 -7 75 -54 316 -80 413 -33
122 -46 169 -56 197 -5 17 -13 44 -18 60 -8 29 -19 62 -46 138 -62 170 -139
345 -221 505 -104 201 -109 210 -232 397 -46 70 -230 318 -270 365 -12 14 -47
54 -78 90 -75 86 -312 322 -392 391 -35 30 -71 61 -80 70 -25 25 -289 220
-366 270 -138 91 -171 111 -247 153 -29 16 -80 44 -113 63 -33 18 -67 36 -75
39 -8 4 -58 26 -110 51 -111 52 -139 64 -200 88 -25 9 -58 22 -75 29 -37 16
-81 31 -165 57 -36 12 -80 27 -98 35 -18 8 -40 14 -48 14 -9 0 -37 6 -63 14
-80 25 -154 44 -231 60 -41 8 -109 22 -150 31 -41 8 -91 15 -110 15 -19 0 -53
5 -75 10 -46 12 -468 40 -565 38 -36 0 -153 -6 -260 -13z m-747 -462 c4 -3 -8
-21 -26 -38 -124 -123 -253 -294 -374 -495 -22 -36 -43 -72 -47 -80 -4 -8 -22
-42 -41 -75 -59 -105 -130 -254 -175 -365 -12 -30 -28 -68 -35 -85 -7 -16 -21
-50 -30 -75 -43 -114 -42 -113 -83 -106 -34 6 -95 24 -167 48 -16 5 -43 13
-60 18 -54 15 -225 77 -295 107 -19 8 -48 21 -65 28 -33 14 -92 43 -202 101
-80 41 -90 60 -47 93 14 11 62 54 107 95 45 41 107 94 137 117 30 24 61 50 69
57 7 7 41 31 75 54 33 23 63 44 66 47 7 9 159 111 165 111 2 0 23 13 47 29
108 72 407 222 568 286 25 10 59 23 75 30 34 14 72 27 165 56 36 12 79 27 95
34 33 15 68 19 78 8z m2127 -8 c25 -8 79 -26 120 -41 41 -14 89 -29 105 -33
17 -4 39 -13 50 -18 11 -6 40 -19 65 -28 68 -26 229 -98 260 -115 8 -5 51 -27
95 -50 83 -42 92 -47 160 -90 22 -14 47 -29 55 -33 8 -4 29 -16 45 -27 17 -11
37 -23 45 -27 17 -8 152 -105 224 -160 27 -21 74 -57 104 -80 47 -36 193 -166
254 -225 23 -23 23 -44 1 -52 -10 -3 -31 -15 -48 -25 -28 -18 -90 -51 -125
-65 -8 -3 -22 -10 -30 -15 -8 -5 -31 -16 -50 -24 -19 -8 -51 -22 -70 -30 -70
-30 -241 -92 -295 -107 -16 -5 -43 -13 -60 -18 -72 -24 -133 -42 -167 -48 -41
-7 -39 -9 -83 106 -9 25 -23 57 -31 72 -8 14 -14 31 -14 37 0 10 -18 51 -90
206 -48 103 -70 148 -105 210 -19 33 -37 67 -41 75 -4 8 -25 44 -47 80 -121
201 -250 372 -374 495 -47 46 -32 56 47 30z"
          />
          <path
            d="M4030 6544 c-337 -35 -594 -80 -850 -150 -210 -58 -294 -84 -378
-120 -18 -8 -39 -14 -47 -14 -8 0 -31 -7 -52 -16 -69 -30 -97 -42 -153 -64
-112 -45 -359 -165 -485 -235 -33 -19 -69 -38 -80 -44 -11 -5 -36 -20 -55 -33
-19 -13 -42 -27 -50 -31 -85 -43 -507 -346 -620 -447 -19 -17 -70 -61 -112
-98 -261 -228 -708 -734 -708 -803 0 -17 126 -194 175 -245 5 -6 28 -33 50
-60 200 -243 538 -560 840 -785 123 -91 329 -228 450 -298 50 -28 97 -56 105
-61 8 -5 38 -21 65 -35 52 -27 73 -38 102 -55 10 -6 25 -13 33 -16 8 -4 47
-21 85 -39 96 -45 172 -79 225 -100 25 -9 59 -23 75 -30 33 -14 101 -41 155
-60 84 -30 107 -37 135 -45 17 -5 44 -13 60 -18 102 -34 303 -87 445 -115 41
-9 100 -21 130 -27 30 -7 87 -16 125 -20 39 -4 102 -13 140 -19 164 -25 358
-36 650 -36 361 0 655 24 880 71 39 8 82 14 96 14 15 0 46 7 69 15 23 8 54 15
68 15 14 0 48 6 76 14 28 8 80 22 116 31 72 19 149 41 195 57 17 5 44 13 60
18 57 16 282 98 370 135 105 45 236 104 255 116 8 5 22 12 30 15 8 3 22 10 30
15 8 5 22 12 30 15 8 3 22 9 30 14 8 5 38 21 65 35 56 29 79 42 213 123 51 32
101 62 110 67 10 6 33 21 52 35 19 14 42 30 52 35 52 31 280 195 298 214 3 3
28 24 55 46 183 145 454 403 604 575 41 47 77 87 81 90 14 12 175 218 189 242
9 16 19 28 24 28 4 0 7 11 7 25 0 23 -117 192 -169 246 -9 9 -52 60 -96 112
-123 148 -357 377 -564 552 -13 11 -31 27 -40 36 -31 30 -362 273 -429 314 -9
6 -43 28 -77 51 -33 22 -67 43 -75 47 -8 4 -28 16 -45 26 -16 11 -50 31 -75
44 -25 14 -61 34 -80 45 -108 63 -421 209 -550 257 -25 9 -58 23 -73 31 -16 8
-35 14 -42 14 -8 0 -29 6 -47 14 -53 22 -109 42 -173 61 -130 38 -152 44 -205
59 -30 8 -80 22 -111 30 -31 9 -66 16 -79 16 -13 0 -46 6 -74 14 -97 27 -352
65 -616 91 -196 19 -697 19 -890 -1z m745 -390 c170 -29 345 -84 471 -145 85
-41 244 -138 264 -159 3 -3 33 -27 67 -53 110 -84 239 -224 338 -365 91 -131
194 -352 227 -487 19 -79 20 -92 9 -132 -12 -45 -44 -71 -94 -80 -28 -4 -40 2
-91 47 -73 64 -90 63 -94 -7 -2 -41 2 -62 23 -99 35 -63 29 -76 -60 -131 -26
-16 -30 -18 -96 -37 -67 -19 -96 -52 -122 -138 -20 -65 -19 -70 53 -198 38
-68 36 -94 -6 -98 -25 -2 -47 9 -113 59 -74 55 -161 152 -161 178 0 6 -7 27
-16 48 -37 84 -44 100 -65 155 -31 78 -59 103 -114 102 -65 -1 -75 -14 -75
-94 0 -71 -15 -118 -58 -178 -13 -17 -32 -32 -43 -32 -10 0 -44 23 -75 51 -58
53 -101 75 -221 114 -132 44 -160 67 -191 160 -15 43 -31 69 -59 92 -21 18
-44 33 -51 33 -16 0 -50 22 -124 77 -32 25 -67 43 -82 43 -53 0 -30 -37 112
-177 135 -135 137 -137 137 -181 0 -40 -4 -48 -42 -81 -41 -35 -102 -61 -143
-61 -39 0 -78 29 -166 125 -114 124 -147 126 -110 5 33 -105 105 -191 192
-229 29 -13 84 -70 84 -87 0 -28 -33 -79 -92 -143 -68 -75 -88 -128 -88 -240
-1 -51 -5 -82 -15 -95 -8 -11 -15 -31 -15 -44 0 -16 -15 -39 -42 -66 -41 -38
-78 -102 -78 -132 0 -13 -18 -58 -47 -119 -42 -87 -133 -144 -244 -152 -52 -4
-57 -3 -74 23 -19 29 -38 112 -50 212 -6 49 -12 66 -32 82 -19 14 -28 37 -40
92 -21 104 -26 111 -73 103 l-38 -6 -16 48 c-12 38 -30 60 -73 97 -51 43 -60
47 -92 41 -20 -4 -43 -12 -51 -19 -8 -7 -39 -24 -69 -39 -100 -51 -135 -15
-194 193 -53 190 -81 476 -58 595 10 54 107 184 141 191 14 3 33 9 42 14 28
16 297 -48 376 -89 20 -10 82 -34 133 -50 44 -14 126 -14 134 -1 3 6 14 10 23
10 21 1 53 27 76 63 15 23 16 32 7 56 -18 43 -50 56 -96 40 l-37 -14 -43 50
c-34 39 -46 47 -56 38 -9 -9 -9 -22 0 -57 14 -57 14 -66 -2 -66 -13 0 -46 39
-60 70 -33 72 -66 116 -95 124 -27 8 -38 4 -84 -27 -51 -34 -79 -45 -213 -83
-33 -9 -69 -23 -80 -30 -29 -21 -51 -17 -74 12 -14 18 -21 41 -21 70 0 62 31
84 121 84 37 0 79 -5 92 -11 19 -9 31 -7 56 5 32 17 35 26 32 89 -2 21 2 37 8
37 6 0 43 19 84 43 40 24 88 49 106 55 48 17 153 15 218 -4 88 -26 134 -16
196 43 28 27 64 57 80 67 30 20 36 50 11 60 -41 16 -67 5 -122 -50 -31 -31
-68 -60 -81 -66 -52 -19 -191 17 -258 68 -104 79 61 194 297 208 83 5 175 22
255 45 22 7 67 11 100 9 55 -3 60 -5 60 -26 0 -19 -14 -31 -68 -61 -88 -48
-115 -74 -97 -95 7 -9 19 -16 27 -16 16 0 124 51 168 80 17 11 39 24 50 30
102 54 103 60 20 135 -68 61 -68 61 -72 121 -6 77 -17 98 -63 119 -33 15 -63
17 -222 12 -100 -2 -194 -8 -208 -12 l-25 -8 22 24 c12 14 53 39 90 58 37 18
76 37 85 42 70 36 275 97 413 122 114 21 415 22 530 1z m-1407 -456 c19 -19
14 -79 -9 -113 -24 -34 -62 -60 -124 -81 -48 -18 -95 -4 -95 28 0 27 96 150
128 164 36 16 85 17 100 2z m-108 -277 c18 -5 25 -14 25 -31 0 -19 -12 -32
-50 -55 -27 -16 -83 -62 -125 -101 -99 -93 -128 -114 -156 -114 -30 0 -30 16
0 71 14 24 37 67 51 94 45 86 52 96 76 113 36 25 128 37 179 23z m2886 -766
c28 -28 45 -57 50 -81 4 -20 -1 -107 -10 -193 -26 -231 -23 -221 -50 -221 -13
0 -27 6 -30 13 -3 6 -15 26 -26 42 -49 76 -62 118 -63 206 0 81 2 89 32 135
32 47 33 48 17 81 -23 48 -21 63 11 63 18 0 39 -14 69 -45z m-401 -336 c75
-66 22 -137 -54 -73 -23 19 -31 34 -31 58 0 57 31 62 85 15z m-847 2 c47 -24
71 -63 52 -86 -21 -25 -113 -20 -146 8 -32 28 -27 54 13 79 35 22 36 22 81 -1z
m919 -153 c71 -30 98 -90 47 -102 -37 -10 -111 3 -134 23 -26 21 -17 57 19 76
32 18 34 18 68 3z m205 -135 c22 -25 58 -111 58 -138 0 -13 -6 -36 -14 -52 -8
-15 -30 -60 -49 -99 -20 -39 -45 -86 -56 -105 -12 -19 -24 -41 -28 -49 -11
-24 -121 -169 -181 -237 -57 -66 -80 -75 -116 -48 -26 20 -71 19 -91 -2 -13
-12 -21 -14 -34 -6 -9 6 -17 15 -17 22 -1 6 -2 16 -3 21 -1 13 -48 13 -56 1
-3 -6 -26 -20 -50 -32 -43 -22 -45 -22 -65 -4 -11 10 -20 25 -20 33 0 17 -25
107 -46 165 -19 50 -18 83 4 142 26 72 66 131 115 166 47 35 60 41 137 62 30
9 80 23 111 31 31 9 64 16 75 16 36 0 169 50 204 76 19 15 93 54 101 54 3 0
13 -8 21 -17z m-1721 -16 c9 -20 5 -36 -19 -88 -30 -66 -48 -112 -62 -164 -34
-118 -79 -180 -93 -127 -7 30 9 224 22 255 6 16 11 39 11 51 0 13 16 39 37 59
44 45 87 50 104 14z m1182 -853 c34 -13 18 -42 -50 -87 -70 -47 -236 -132
-310 -161 -187 -71 -275 -92 -471 -111 -185 -18 -467 6 -598 51 -50 18 -65 45
-50 93 12 40 88 119 137 142 108 52 119 54 259 53 78 -1 148 -7 165 -14 17 -6
48 -15 70 -20 56 -13 130 -35 195 -59 104 -40 171 -53 202 -40 15 6 28 15 28
18 0 10 128 103 170 123 19 9 46 19 60 22 32 6 170 -1 193 -10z"
          />
          <path
            d="M8456 3843 c-200 -200 -189 -185 -231 -338 -38 -138 -48 -172 -61
-203 -8 -18 -14 -39 -14 -47 0 -8 -6 -29 -14 -47 -8 -18 -21 -51 -29 -73 -61
-163 -165 -389 -242 -520 -19 -33 -39 -69 -45 -80 -6 -11 -19 -33 -30 -50 -11
-16 -23 -37 -27 -45 -14 -31 -180 -265 -241 -341 -111 -138 -100 -131 -146
-96 -17 13 -38 27 -46 30 -8 4 -28 16 -45 26 -42 27 -258 134 -325 161 -30 12
-68 28 -85 35 -16 7 -47 20 -68 29 -21 9 -44 16 -52 16 -8 0 -29 6 -47 14 -49
20 -99 37 -138 47 -169 41 -191 53 -172 94 31 68 21 68 -163 6 -145 -49 -255
-82 -390 -114 -33 -8 -82 -21 -110 -27 -27 -7 -72 -16 -100 -21 -27 -4 -72
-15 -100 -25 -46 -16 -48 -18 -25 -25 14 -4 48 -7 75 -8 77 -1 361 -56 370
-71 3 -5 -2 -26 -11 -47 -30 -68 -42 -97 -64 -153 -62 -154 -159 -348 -254
-503 -22 -37 -45 -76 -51 -85 -21 -35 -112 -160 -169 -231 -153 -189 -346
-349 -526 -433 -78 -37 -179 -70 -204 -66 l-21 3 -5 760 -5 760 -144 5 c-89 3
-149 1 -158 -5 -11 -8 -13 -147 -16 -765 l-2 -755 -23 -3 c-25 -4 -119 27
-202 66 -181 85 -374 244 -529 436 -174 215 -361 540 -471 816 -22 56 -35 86
-64 154 -9 21 -13 42 -9 47 14 13 115 39 152 39 20 1 63 7 96 15 33 8 85 15
115 16 30 0 64 4 75 9 33 13 -5 25 -200 65 -44 9 -96 21 -115 27 -19 7 -53 15
-75 19 -22 4 -71 17 -110 29 -38 12 -86 25 -105 30 -19 4 -51 14 -70 20 -19 7
-51 18 -70 25 -19 7 -51 18 -70 25 -83 29 -95 23 -68 -35 19 -41 -3 -53 -172
-94 -39 -10 -89 -27 -138 -47 -18 -8 -39 -14 -47 -14 -14 0 -66 -20 -118 -46
-16 -8 -35 -14 -42 -14 -7 0 -26 -7 -42 -15 -15 -8 -89 -44 -163 -80 -74 -37
-148 -75 -165 -86 -16 -10 -37 -22 -45 -26 -8 -3 -29 -17 -46 -30 -46 -35 -34
-43 -146 96 -24 29 -58 74 -76 100 -18 25 -38 53 -45 61 -28 34 -130 191 -143
220 -4 8 -13 22 -19 30 -49 61 -237 444 -285 580 -5 14 -18 50 -30 80 -34 90
-79 229 -103 325 -9 33 -21 79 -27 103 -9 36 -39 71 -202 234 -106 105 -194
186 -196 180 -2 -7 1 -35 7 -62 6 -28 11 -65 11 -83 0 -18 7 -66 15 -107 9
-41 23 -109 31 -150 16 -78 35 -153 60 -231 7 -26 14 -54 14 -63 0 -8 6 -30
14 -48 7 -18 23 -62 34 -98 27 -83 42 -127 58 -165 7 -16 20 -50 29 -75 28
-72 99 -233 116 -260 5 -8 12 -22 15 -30 12 -29 15 -36 47 -95 19 -33 46 -82
61 -110 15 -27 36 -63 47 -80 10 -16 22 -36 25 -44 36 -72 304 -438 411 -560
156 -177 429 -438 569 -543 38 -28 71 -54 74 -58 23 -28 345 -240 462 -304 29
-16 80 -44 113 -63 33 -18 67 -36 75 -39 8 -4 47 -21 85 -39 136 -64 191 -87
305 -130 22 -8 57 -21 78 -29 20 -8 62 -22 92 -31 30 -10 70 -24 88 -31 18 -8
40 -14 50 -14 9 0 34 -6 57 -14 55 -19 121 -36 175 -45 25 -5 65 -13 90 -19
152 -37 310 -58 585 -78 311 -23 653 -5 950 47 33 6 83 14 110 19 28 4 73 13
100 20 28 6 77 19 110 27 144 35 389 111 480 149 17 7 50 20 75 29 75 29 287
126 320 146 8 5 20 11 25 13 6 2 17 7 25 10 8 3 31 16 50 27 19 12 55 32 80
46 25 13 59 33 75 44 17 10 39 23 50 29 29 15 56 32 96 63 20 15 40 27 43 27
6 0 126 86 245 178 340 259 728 682 946 1030 22 35 48 75 57 90 10 15 22 36
28 47 6 11 26 47 45 80 20 33 47 83 61 110 23 46 32 63 56 105 4 8 11 22 14
30 3 8 20 44 36 80 40 87 52 117 73 170 9 25 22 59 29 75 16 38 31 82 58 165
11 36 27 80 34 98 8 18 14 40 14 48 0 9 6 37 14 63 28 89 46 158 46 176 0 10
6 41 14 69 23 81 73 393 64 401 -2 3 -89 -80 -192 -182z m-5757 -1769 c12 -15
21 -33 21 -40 0 -7 7 -30 16 -51 9 -21 22 -51 29 -68 7 -16 23 -55 35 -85 37
-92 149 -328 180 -380 5 -8 39 -64 75 -125 87 -147 78 -133 179 -270 85 -114
130 -167 203 -240 46 -45 21 -61 -49 -31 -42 17 -94 35 -133 46 -36 10 -89 28
-130 46 -16 7 -50 20 -75 29 -131 50 -493 231 -540 270 -8 6 -22 15 -30 19
-24 11 -50 28 -129 81 -40 28 -80 55 -89 60 -23 14 -136 98 -142 105 -3 4 -30
26 -60 49 -30 24 -95 80 -144 125 -49 44 -96 86 -104 92 -24 18 -9 44 43 74
72 41 221 114 285 140 30 12 69 28 85 35 46 20 160 61 210 75 17 5 55 17 85
26 97 29 145 43 152 43 4 1 16 -11 27 -25z m3706 -1 c28 -8 64 -19 80 -25 17
-5 44 -13 60 -18 46 -13 161 -54 210 -75 17 -7 55 -23 85 -35 68 -28 224 -105
265 -131 17 -10 40 -23 53 -29 24 -11 30 -45 8 -57 -7 -4 -53 -45 -102 -90
-49 -45 -111 -98 -139 -119 -27 -20 -63 -49 -80 -64 -16 -15 -60 -48 -97 -74
-38 -25 -96 -65 -130 -89 -35 -24 -70 -46 -78 -50 -18 -9 -46 -26 -80 -49 -86
-57 -393 -210 -530 -262 -25 -10 -58 -23 -75 -30 -37 -16 -81 -31 -165 -57
-36 -12 -80 -27 -98 -35 -70 -30 -95 -14 -49 31 124 123 253 294 374 495 22
36 43 72 47 80 4 8 22 42 41 75 33 60 51 95 105 210 62 131 90 196 90 209 0 8
4 17 10 21 5 3 14 20 19 38 21 70 43 123 58 139 17 19 29 18 118 -9z"
          />
        </g>
      </svg>
    </Box>
  );
}

export default FirstIcon;
