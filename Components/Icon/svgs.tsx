import React from 'react';
import Svg, {G, Path, Circle, Rect} from 'react-native-svg';

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

export default {
  Info: {
    svg: (
      <G>
        <Circle
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
          cx="12"
          cy="12"
          r="9"
        />
        <Path d="M13 17h-2v-6h2v6zm0-8h-2V7h2v2z" stroke="none" />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  Phone: {
    svg: (
      <Path
        d="m17.7071 13.7071 2.6481 2.6481c.3561.3561.3561.9335 0 1.2896-1.9252 1.9252-4.9731 2.1418-7.1512.5082l-1.5754-1.1816c-1.74356-1.3076-3.29238-2.8564-4.60003-4.6L5.84701 10.796c-1.6336-2.17812-1.417-5.22601.50822-7.15123.3561-.3561.93344-.3561 1.28954 0l2.64813 2.64812c.3905.39053.3905 1.02369 0 1.41422L9.27175 8.72825c-.16229.16229-.20252.41021-.09988.61548 1.18663 2.37337 3.11103 4.29777 5.48443 5.48437.2052.1027.4532.0624.6154-.0998l1.0212-1.0212c.3905-.3905 1.0237-.3905 1.4142 0Z"
        stroke="#222"
        fill="none"
      />
    ),
    viewBox: '0 0 24 24',
  },
  Stethoscope: {
    svg: (
      <G>
        <Circle cx="18.5" cy="10.5" r="2" />
        <Circle cx="18.5" cy="10.5" r=".5" />
        <Circle cx="8.5" cy="13.5" r="1.5" />
        <Path
          d="M8.5 13.5c3.5935 0 4.7658-4.84246 4.9669-8.00187C13.502 4.94696 13.0523 4.5 12.5 4.5h-1M8.5 13.5c-3.5935 0-4.76577-4.84246-4.96692-8.00187C3.49799 4.94696 3.94772 4.5 4.5 4.5h1"
          stroke-linecap="round"
        />
        <Path
          d="M18.5 12.5v2c0 2.7614-2.2386 5-5 5v0c-2.7614 0-5-2.2386-5-5v-1"
          stroke-linecap="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  Export: {
    svg: (
      <G>
        <Path d="M5.5 5.9c0-.84008 0-1.26012.16349-1.58099.14381-.28224.37328-.51171.65552-.65552C6.63988 3.5 7.05992 3.5 7.9 3.5h4.6059c.3669 0 .5503 0 .7229.04145.1531.03674.2994.09735.4336.17959.1514.09276.2811.22248.5405.4819l3.5942 3.59412c.2594.25942.3891.38914.4819.54051.0822.13421.1428.28053.1796.43358.0414.17263.0414.35608.0414.72296V18.1c0 .8401 0 1.2601-.1635 1.581-.1438.2822-.3733.5117-.6555.6555-.3209.1635-.7409.1635-1.581.1635H7.9c-.84008 0-1.26012 0-1.58099-.1635-.28224-.1438-.51171-.3733-.65552-.6555C5.5 19.3601 5.5 18.9401 5.5 18.1V5.9Z" />
        <Path d="M12.5 3.5v3.6c0 .84008 0 1.26012.1635 1.58099.1438.28224.3733.51171.6555.65552C13.6399 9.5 14.0599 9.5 14.9 9.5h3.6M14 14.5l-1.8939 1.8939c-.0586.0586-.1536.0586-.2122 0L10 14.5M12 11v5" />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  Account: {
    svg: (
      <G>
        <Path
          d="M19.7274 18.4471c-.4558-1.2758-1.4602-2.4032-2.8573-3.2072C15.4729 14.4358 13.7611 14 12 14c-1.7611 0-3.47294.4358-4.87009 1.2399-1.39715.804-2.40152 1.9314-2.85732 3.2072"
          stroke-linecap="round"
        />
        <Circle cx="12" cy="10" r="4" stroke-linecap="round" />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  Schedule: {
    svg: (
      <G>
        <Rect x="3" y="6" width="18" height="15" rx="2" />
        <Path d="M3 11h18M8 3v4M16 3v4" stroke-linecap="round" />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  Home: {
    svg: (
      <Path d="m4.45067 13.9082 6.95263 6.5313c.2395.2249.3592.3374.5004.3651.0636.0125.129.0125.1926 0 .1412-.0277.2609-.1402.5004-.3651l6.9526-6.5313c1.9562-1.8376 2.1937-4.8616.5485-6.98213l-.3093-.39873c-1.9682-2.53676-5.9189-2.11133-7.3018.78631-.1954.40931-.778.40931-.9734 0-1.3829-2.89764-5.33358-3.32307-7.30176-.7863l-.30935.39872C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" />
    ),
    viewBox: '0 0 24 24',
  },
  Tips: {
    svg: (
      <Path
        d="M19.3259 5.77772C20 6.78661 20 8.19108 20 11c0 2.8089 0 4.2134-.6741 5.2223-.2919.4367-.6669.8117-1.1036 1.1036-.8814.5889-2.0646.6633-4.2223.6727V18l-1.1056 2.2111c-.3685.7371-1.4203.7371-1.7888 0L10 18v-.0014c-2.1577-.0094-3.34093-.0838-4.22228-.6727-.43676-.2919-.81176-.6669-1.1036-1.1036C4 15.2134 4 13.8089 4 11c0-2.80892 0-4.21339.67412-5.22228.29184-.43676.66684-.81176 1.1036-1.1036C6.78661 4 8.19108 4 11 4h2c2.8089 0 4.2134 0 5.2223.67412.4367.29184.8117.66684 1.1036 1.1036ZM9 9h6M9 13h6"
        stroke="#222"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
    viewBox: '0 0 24 24',
  },
  Fab: {
    svg: <Path d="M12 6v12M18 12H6" stroke-linecap="round" />,
    viewBox: '0 0 24 24',
  },
  Water: {
    svg: (
      <Path d="M19 14.5714C19 18.1218 15.866 21 12 21c-3.86599 0-7-2.8782-7-6.4286 0-4.5207 4.64371-9.35363 6.3667-10.9912.3584-.3407.9082-.3407 1.2666 0C14.3563 5.21777 19 10.0507 19 14.5714Z" />
    ),
    viewBox: '0 0 24 24',
  },
  Moon: {
    svg: (
      <Path d="M22.1175 8.8033c-.0145.17279-.3099 2.4839-.3338 2.6577-.7331 5.3387-6.0247 8.9566-11.3633 8.2235-5.3387-.7331-9.07224-5.6553-8.33913-10.99394.25162-1.83232.78667-4.33803 3.45713-6.45214-.40294 2.93431 2.13111 8.04818 8.3453 8.90158 3.5063.4815 6.6058-.6254 8.2338-2.3367Z" />
    ),
    viewBox: '0 0 24 24',
  },
  Plus: {
    svg: <Path d="M16 2H8v6H2v8h6v6h8v-6h6V8h-6V2Z" />,
    viewBox: '0 0 24 24',
  },
  Cross: {
    svg: (
      <Path
        d="M18 6 6 18M6 6l12 12"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
    viewBox: '0 0 24 24',
  },
  Tick: {
    svg: (
      <Path
        d="m5 14 3.23309 2.4248c.42869.3215 1.03463.248 1.37396-.1667L18 6"
        stroke-linecap="round"
      />
    ),
    viewBox: '0 0 24 24',
  },
  Add: {
    svg: <Path d="M12 6v12M18 12H6" stroke-linecap="round" />,
    viewBox: '0 0 24 24',
  },
  Star4: {
    svg: (
      <Path d="M7.17418 17.0178c.11673.1337.20915.2878.394.5958 1.64148 2.7358 2.46222 4.1037 3.58652 4.4339.5519.1621 1.1387.1621 1.6906 0 1.1243-.3302 1.945-1.6981 3.5865-4.4339.1849-.308.2773-.4621.394-.5958.0596-.0683.1237-.1324.192-.192.1337-.1167.2878-.2091.5958-.394 2.7358-1.6415 4.1037-2.4622 4.4339-3.5865.1621-.5519.1621-1.1387 0-1.6906-.3302-1.1243-1.6981-1.94504-4.4339-3.58652-.308-.18485-.4621-.27727-.5958-.394-.0683-.05955-.1324-.12368-.192-.19193-.1167-.13377-.2091-.28781-.394-.59589-1.6415-2.73579-2.4622-4.10368-3.5865-4.43385-.5519-.16208-1.1387-.16208-1.6906 0-1.1243.33017-1.94504 1.69806-3.58652 4.43385-.18485.30808-.27727.46212-.394.59589-.05955.06825-.12368.13238-.19193.19193-.13377.11673-.28781.20915-.59589.394-2.73579 1.64148-4.10368 2.46222-4.43385 3.58652-.16208.5519-.16208 1.1387 0 1.6906.33017 1.1243 1.69806 1.945 4.43385 3.5865.30808.1849.46212.2773.59589.394.06825.0596.13238.1237.19193.192Z" />
    ),
    viewBox: '0 0 24 24',
  },
  Star: {
    svg: (
      <Path d="M12.8462 6.50331 9.88461 2 8.40385 7.16556 2.75 5.97351l3.09615 4.76819L1 13.6556l5.51923 1.3245-1.07692 5.4305 4.84619-2.9139L13.3846 22l1.3462-5.298 5.5192 1.192-2.9615-4.6357L22 10.2119l-5.5192-1.19203 1.2115-5.43047-4.8461 2.91391Z" />
    ),
    viewBox: '0 0 24 24',
  },
  Refresh: {
    svg: (
      <G>
        <Path d="m14 15-4 4 4 4" />
        <Path
          d="M18.0622 8.5c.6516 1.12862.9752 2.4167.9344 3.7193-.0409 1.3026-.4445 2.5679-1.1655 3.6535-.7211 1.0856-1.7308 1.9484-2.9156 2.4912-1.1848.5427-2.4976.744-3.7906.5811"
          stroke-linecap="round"
        />
        <Path d="m10 9 4-4-4-4" />
        <Path
          d="M5.93782 15.5c-.66106-1.145-.98435-2.4538-.93242-3.7749.05193-1.3211.47694-2.60053 1.22584-3.69012.74889-1.08958 1.79105-1.94479 3.00584-2.46664 1.21482-.52185 2.55252-.689 3.85842-.48209"
          stroke-linecap="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  Send: {
    svg: (
      <G>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.2103 5.19088c-.4238.07538-1.0029.26702-1.8469.54837L7.85024 8.57697c-1.19176.39726-2.03539.67961-2.58675.94783-.59338.28867-.60118.44513-.60118.4752 0 .0301.0078.1865.60118.4752.55136.2682 1.39499.5506 2.58675.9478l1.41054.4702c.03685.0123.07323.0244.10913.0363.82459.2744 1.39809.4652 1.81679.8839.4187.4187.6095.9922.8838 1.8167.0119.0359.024.0723.0363.1091l.4702 1.4106c.3973 1.1917.6796 2.0354.9478 2.5867.2887.5934.4452.6012.4752.6012.0301 0 .1866-.0078.4752-.6012.2682-.5513.5506-1.395.9479-2.5867l2.8377-8.51318c.2813-.84404.473-1.42311.5483-1.84685.0761-.42737.0011-.52445-.0367-.56219-.0377-.03773-.1348-.11272-.5621-.0367Zm-.1752-.98454c.5098-.09068 1.0452-.08515 1.4445.31414.3992.39928.4048.93465.3141 1.44443-.0898.50476-.3062 1.1539-.5706 1.94705l-.0136.04088-2.8378 8.51316-.0135.0405c-.3807 1.1424-.6831 2.0495-.9837 2.6675-.2838.5832-.6838 1.1637-1.3745 1.1637-.6907 0-1.0907-.5805-1.3744-1.1637-.3006-.618-.603-1.5251-.9838-2.6674l-.0135-.0406-.4702-1.4105c-.3262-.9787-.4478-1.3042-.6785-1.535-.2308-.2308-.55637-.3524-1.53505-.6786l-1.41054-.4702-.04054-.0135c-1.14236-.3808-2.04948-.6831-2.66744-.9838-.58322-.2837-1.16372-.6837-1.16372-1.3744 0-.69069.5805-1.09071 1.16372-1.37444.61796-.30062 1.52509-.60299 2.66745-.98376l.04054-.01351 8.51318-2.83773.0408-.01361c.7932-.26441 1.4423-.48081 1.9471-.57061Z"
        />
        <Path d="M15.3536 9.35355c.1952-.19526.1952-.51184 0-.7071-.1953-.19527-.5119-.19527-.7072 0l.7072.7071Zm-4 4.00005 4-4.00005-.7072-.7071-4 3.99995.7072.7072Z" />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
};
