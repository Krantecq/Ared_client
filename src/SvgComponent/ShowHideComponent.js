import React from 'react';
import {View, Text} from 'react-native';
import Svg, {
  Path,
  Defs,
  ClipPath,
  Rect,
  Line,
  RadialGradient,
  Stop,
} from 'react-native-svg';
import {SIZES} from '../../constant';

export const HideComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none">
        <Path
          d="M5.5068 7.57787C5.12347 7.1952 4.89014 6.6752 4.89014 6.09187C4.89014 4.9232 5.83147 3.9812 6.99947 3.9812C7.57747 3.9812 8.10947 4.2152 8.48614 4.59787"
          stroke="#130F26"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.06975 6.46594C8.91508 7.32594 8.23775 8.00461 7.37842 8.16061"
          stroke="#130F26"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.43634 9.64823C2.37834 8.81757 1.48234 7.60423 0.833008 6.09157C1.48901 4.57223 2.39101 3.35223 3.45567 2.5149C4.51367 1.67757 5.73434 1.2229 6.99967 1.2229C8.27234 1.2229 9.49234 1.68423 10.557 2.52757"
          stroke="#130F26"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.9649 3.9939C12.4235 4.60323 12.8269 5.30656 13.1662 6.09123C11.8549 9.12923 9.53752 10.9592 6.99952 10.9592C6.42419 10.9592 5.85686 10.8659 5.31152 10.6839"
          stroke="#130F26"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12.2577 0.83313L1.7417 11.3491"
          stroke="#130F26"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export const ShowComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="13"
        viewBox="0 0 15 13"
        fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.82126 6.603C9.82126 7.84924 8.81057 8.85923 7.56433 8.85923C6.31809 8.85923 5.30811 7.84924 5.30811 6.603C5.30811 5.35605 6.31809 4.34607 7.56433 4.34607C8.81057 4.34607 9.82126 5.35605 9.82126 6.603Z"
          stroke="#130F26"
          stroke-width="1.07065"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.56382 11.8149C10.2818 11.8149 12.7679 9.86056 14.1676 6.60293C12.7679 3.34529 10.2818 1.39099 7.56382 1.39099H7.56667C4.84864 1.39099 2.36259 3.34529 0.962891 6.60293C2.36259 9.86056 4.84864 11.8149 7.56667 11.8149H7.56382Z"
          stroke="#130F26"
          stroke-width="1.07065"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export const ProfileComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none">
        <Path
          d="M8.45833 6.04167H3.625M6.04167 8.45833V3.625"
          stroke="#00EA77"
          stroke-width="1.28567"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M13.2912 4.12042C14.0552 3.7944 14.8772 3.6259 15.7079 3.625C16.7967 3.62662 17.8649 3.92247 18.7995 4.48128C19.734 5.04009 20.5002 5.84108 21.0169 6.79952C21.5336 7.75797 21.7818 8.83826 21.735 9.92612C21.6882 11.014 21.3483 12.069 20.7513 12.9796C20.1542 13.8901 19.3221 14.6224 18.3431 15.099C17.364 15.5755 16.2744 15.7786 15.1894 15.6868C14.1044 15.595 13.0644 15.2116 12.1794 14.5773C11.2943 13.943 10.5972 13.0813 10.1616 12.0833"
          stroke="#1D493E"
          stroke-width="1.28567"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.4998 15.7084H16.9165C19.1598 15.7084 21.3112 16.5995 22.8974 18.1858C24.4837 19.772 25.3748 21.9234 25.3748 24.1667C25.3748 24.4872 25.2475 24.7945 25.0209 25.0211C24.7943 25.2477 24.487 25.375 24.1665 25.375H7.24984C6.92937 25.375 6.62202 25.2477 6.39542 25.0211C6.16881 24.7945 6.0415 24.4872 6.0415 24.1667C6.0415 21.9234 6.93265 19.772 8.51889 18.1858C10.1051 16.5995 12.2565 15.7084 14.4998 15.7084Z"
          stroke="#1D493E"
          stroke-width="1.28567"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export const GroupComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none">
        <Path
          d="M22 21L1 21"
          stroke="#1D493E"
          stroke-width="1.33"
          stroke-linecap="round"
        />
        <Path
          d="M19.9001 21V5C19.9001 3.11438 19.9001 2.17157 18.916 1.58579C17.9318 1 16.3479 1 13.1801 1H9.8201C6.65226 1 5.06834 1 4.08423 1.58579C3.1001 2.17157 3.1001 3.11438 3.1001 5V21"
          stroke="#1D493E"
          stroke-width="1.33"
        />
        <Path
          d="M11.5 20.1666V17.6666"
          stroke="#00EA77"
          stroke-width="1.33"
          stroke-linecap="round"
        />
        <Line x1="5.2002" y1="8" x2="17.8002" y2="8" stroke="#00EA77" />
        <Line x1="5.2002" y1="13" x2="17.8002" y2="13" stroke="#00EA77" />
      </Svg>
    </View>
  );
};

export const NeutralisdComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="23"
        viewBox="0 0 21 23"
        fill="none">
        <Path
          d="M10.5003 17.889L12.6114 15.2502H8.38916L10.5003 12.6112"
          stroke="#00EA77"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M5.22217 8.38892H15.7777"
          stroke="#00EA77"
          stroke-width="1.33333"
          stroke-linecap="round"
        />
        <Path
          d="M1 12.6111V10.5C1 6.54195 1 4.56292 2.00796 3.17557C2.33349 2.72752 2.72752 2.33349 3.17557 2.00796C4.56292 1 6.54195 1 10.5 1C14.458 1 16.4371 1 17.8244 2.00796C18.2725 2.33349 18.6665 2.72752 18.992 3.17557C20 4.56292 20 6.54195 20 10.5V12.6111C20 16.5691 20 18.5482 18.992 19.9355C18.6665 20.3836 18.2725 20.7776 17.8244 21.1032C16.4371 22.1111 14.458 22.1111 10.5 22.1111C6.54195 22.1111 4.56292 22.1111 3.17557 21.1032C2.72752 20.7776 2.33349 20.3836 2.00796 19.9355C1.44741 19.164 1.19859 18.2095 1.08815 16.8333"
          stroke="#1D493E"
          stroke-width="1.33333"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};

export const CircleComponet = () => {
  return (
    <Svg
      width="313"
      height="313"
      viewBox="0 0 313 313"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M244.482 90.2357C207.761 41.5043 138.487 31.7686 89.7558 68.4904C41.0244 105.212 31.2887 174.486 68.0104 223.217C104.732 271.948 174.006 281.684 222.737 244.962C271.468 208.241 281.204 138.967 244.482 90.2357ZM73.7134 218.919C39.3651 173.338 48.4716 108.542 94.0533 74.1933C139.635 39.845 204.431 48.9515 238.779 94.5332C273.128 140.115 264.021 204.911 218.44 239.259C172.858 273.608 108.062 264.501 73.7134 218.919Z"
        fill="#D9D9D9"
      />
      <Path
        d="M220.547 242.057C221.757 243.661 224.042 243.986 225.607 242.725C244.319 227.634 257.626 206.824 263.453 183.434C269.574 158.864 267.07 132.938 256.36 109.995C245.65 87.0511 227.385 68.4822 204.621 57.396C182.949 46.8416 158.451 43.6789 134.866 48.3313C132.895 48.7201 131.676 50.681 132.13 52.6386V52.6386C132.583 54.5961 134.537 55.8086 136.51 55.4243C158.469 51.1456 181.262 54.1139 201.435 63.9381C222.699 74.2942 239.762 91.64 249.766 113.073C259.771 134.505 262.11 158.724 256.392 181.675C250.968 203.447 238.606 222.825 221.225 236.91C219.664 238.175 219.338 240.452 220.547 242.057V242.057Z"
        fill="url(#paint0_radial_68_697)"
      />
      <Path
        d="M170.381 262.632C170.647 264.624 172.479 266.029 174.461 265.698C197.192 261.899 218.2 251.078 234.509 234.71C251.676 217.482 262.679 195.071 265.81 170.952C268.942 146.833 264.027 122.355 251.829 101.314C240.24 81.3238 222.692 65.4973 201.685 56.0194C199.854 55.193 197.724 56.0838 196.958 57.9416V57.9416C196.193 59.7994 197.081 61.9203 198.911 62.751C218.437 71.6156 234.748 86.3593 245.534 104.964C256.929 124.619 261.519 147.485 258.594 170.015C255.669 192.545 245.391 213.481 229.355 229.574C214.176 244.807 194.64 254.897 173.498 258.481C171.516 258.817 170.116 260.641 170.381 262.632V262.632Z"
        fill="url(#paint1_radial_68_697)"
      />
      <Path
        d="M50.4425 141.856C48.4527 141.576 46.6065 142.963 46.3925 144.961C43.7671 169.47 49.4158 194.159 62.4373 215.088C63.4988 216.795 65.7642 217.24 67.4345 216.123V216.123C69.1048 215.006 69.5471 212.75 68.4895 211.041C56.4575 191.602 51.2204 168.711 53.6026 145.974C53.812 143.976 52.4324 142.136 50.4425 141.856V141.856Z"
        fill="url(#paint2_radial_68_697)"
      />
      <Path
        d="M63.7179 210.148C61.9777 211.153 61.3766 213.382 62.438 215.089C75.4586 236.019 95.1098 251.996 118.256 260.472C120.143 261.163 122.203 260.119 122.831 258.211V258.211C123.46 256.302 122.419 254.251 120.534 253.556C99.0841 245.645 80.8647 230.832 68.7434 211.448C67.678 209.744 65.4581 209.144 63.7179 210.148V210.148Z"
        fill="url(#paint3_radial_68_697)"
      />
      <Path
        d="M143.226 50.6781C142.981 48.6837 141.164 47.2593 139.179 47.5697C114.825 51.3772 92.4393 63.2234 75.5933 81.2181C74.22 82.685 74.3756 84.9887 75.8869 86.3129V86.3129C77.3983 87.6372 79.6927 87.4802 81.0693 86.0165C96.7323 69.3632 117.487 58.3801 140.066 54.7963C142.051 54.4813 143.471 52.6725 143.226 50.6781V50.6781Z"
        fill="url(#paint4_radial_68_697)"
      />
      <Path
        d="M80.6963 81.1758C79.2754 79.7549 76.9665 79.7513 75.5932 81.2181C58.7464 99.2121 48.3995 122.329 46.2033 146.88C46.0243 148.882 47.5651 150.601 49.5714 150.714V150.714C51.5776 150.827 53.289 149.291 53.4727 147.29C55.5624 124.524 65.1555 103.092 80.7417 86.3664C82.1116 84.8964 82.1171 82.5966 80.6963 81.1758V81.1758Z"
        fill="url(#paint5_radial_68_697)"
      />
      <Path
        d="M102.824 249.257C101.819 250.997 102.413 253.228 104.186 254.175C125.927 265.791 150.934 269.802 175.217 265.569C177.197 265.224 178.459 263.29 178.049 261.323V261.323C177.639 259.356 175.712 258.101 173.732 258.441C151.2 262.315 128.015 258.596 107.826 247.87C106.051 246.927 103.829 247.517 102.824 249.257V249.257Z"
        fill="url(#paint6_radial_68_697)"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_68_697"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(101.222 133.263) rotate(78.11) scale(113.406)">
          <Stop offset="0.718046" stop-color="#56E453" />
          <Stop offset="1" stop-color="#039800" />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial_68_697"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(101.222 133.263) rotate(78.11) scale(113.406)">
          <Stop offset="0.718046" stop-color="#56E453" />
          <Stop offset="1" stop-color="#039800" />
        </RadialGradient>
        <RadialGradient
          id="paint2_radial_68_697"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(71.0206 230.5) rotate(-103.69) scale(80.2808)">
          <Stop offset="0.640625" stop-color="#FFE074" />
          <Stop offset="1" stop-color="#FFDB1F" />
        </RadialGradient>
        <RadialGradient
          id="paint3_radial_68_697"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(169.65 265.267) rotate(-169.743) scale(150.904)">
          <Stop offset="0.479167" stop-color="#FFCBBE" />
          <Stop offset="0.679267" stop-color="#FF9076" />
        </RadialGradient>
        <RadialGradient
          id="paint4_radial_68_697"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(192.168 204.558) rotate(-71.89) scale(113.406)">
          <Stop offset="0.718046" stop-color="#D1FFD0" />
          <Stop offset="1" stop-color="#9FFF9D" />
        </RadialGradient>
        <RadialGradient
          id="paint5_radial_68_697"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(54.8729 197.764) rotate(-94.7432) scale(150.904)">
          <Stop offset="0.479167" stop-color="#FFE5BF" />
          <Stop offset="0.679267" stop-color="#FFBE60" />
        </RadialGradient>
        <RadialGradient
          id="paint6_radial_68_697"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(184.021 263) rotate(-172.753) scale(87.1966)">
          <Stop stop-color="#D0EEFF" />
          <Stop offset="1" stop-color="#9DA1FF" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};
