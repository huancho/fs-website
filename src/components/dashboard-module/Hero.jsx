import demo from '../../assets/demo.gif';
import logo from '../../assets/formula-logo.png'
import './animations.css';

const Hero = () => {

  return (
    <section className="w-full flex flex-col items-center my-20 text-white">
      <div className="flex items-center justify-center mb-20 select-none">
        <p className="text-6xl md:text-8xl leading-[80px] md:leading-[106px] font-black bg-green-gradient bg-clip-text text-transparent animate-curly-left">{`{`}</p>
        <h1 className="text-6xl md:text-8xl font-bold animate-text-appear">
          &nbsp;Formula Studio&nbsp;
        </h1>
        <p className="text-6xl md:text-8xl leading-[80px] md:leading-[106px] font-black bg-green-gradient bg-clip-text text-transparent animate-curly-right">{`}`}</p>
      </div>

      <h2 className="text-4xl md:text-5xl font-semibold bg-[#29B367] py-5 px-10 rounded leading-10 mb-5">
        Save Time, Work Smarter
      </h2>
      <h4 className="text-2xl mb-20 w-[400px] text-center leading-10">
        Instantly generate formulas with ChatGPT, right where you need them.
      </h4>
      <div className="flex items-center justify-center flex-col gap-4 mb-20">
        <h5 className="text-xl">
          Start{' '}
          <span className="font-black bg-green-gradient bg-clip-text text-transparent">
            Now
          </span>
          :
        </h5>
        <div className="flex gap-12">
          <div className="flex gap-2">
            <LogoSheet />
            <a
              href="https://sheets.new"
              target="_blank"
              className="font-medium text-lg flex gap-2 items-center transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-colors after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] text-white self-start after:scale-x-100 hover:text-gray-200 hover:after:bg-gray-200"
            >
              Google Sheets
            </a>
          </div>
          <div className="flex gap-2">
            <LogoExcel />
            <a
              href="https://onedrive.live.com/"
              target="_blank"
              className="font-medium text-lg flex gap-2 items-center transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-colors after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] text-white self-start after:scale-x-100 hover:text-gray-200 hover:after:bg-gray-200"
            >
              OneDrive Excel
            </a>
          </div>
          <div className="flex gap-2">
            <LogoNotion />
            <a
              href="https://www.notion.so/"
              target="_blank"
              className="font-medium text-lg flex gap-2 items-center transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-colors after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] text-white self-start after:scale-x-100 hover:text-gray-200 hover:after:bg-gray-200"
            >
              Notion
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 ">
        <ul>
          <li>
            <div className="flex items-center mb-4 md:mb-6 gap-4">
              <input
                id="default-checkbox"
                type="checkbox"
                checked
                style={{ accentColor: '#29B367' }}
                className="w-4 h-4 text-medium bg-gray-100 border-gray-300 rounded "
              />
              <span className="text-base md:text-lg lg:text-xl text-gray-400">
                Download the extension
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-4 md:mb-6 gap-4">
              <input
                id="default-checkbox"
                type="checkbox"
                checked
                style={{ accentColor: '#29B367' }}
                className="w-4 h-4 text-medium bg-gray-100 border-gray-300 rounded "
              />
              <span className="text-base md:text-lg lg:text-xl text-gray-400">
                Create a user
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-4 md:mb-6 gap-4">
              <input
                id="default-checkbox"
                type="checkbox"
                style={{ accentColor: '#29B367' }}
                className="w-4 h-4 text-medium bg-gray-100 border-gray-300 rounded "
              />
              <span className="text-base md:text-lg lg:text-xl flex">
                Go to one of these tools&nbsp;
                <a
                  href="https://sheets.new"
                  className="relative bg-[linear-gradient(#fff,#fff),linear-gradient(#34C759,#34C759)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#34C759]"
                >
                  Sheets
                </a>
                ,&nbsp;
                <a
                  href="https://onedrive.live.com/"
                  className="relative bg-[linear-gradient(#fff,#fff),linear-gradient(#29B367,#29B367)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#29B367]"
                >
                  Excel
                </a>
                ,&nbsp;
                <a
                  href="https://www.notion.so/"
                  className="relative bg-[linear-gradient(#fff,#fff),linear-gradient(#787774,#787774)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#787774]"
                >
                  Notion
                </a>
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-4 md:mb-6 gap-4">
              <input
                id="default-checkbox"
                type="checkbox"
                style={{ accentColor: '#29B367' }}
                className="w-4 h-4 text-medium bg-gray-100 border-gray-300 rounded "
              />
              <span className="text-base md:text-lg lg:text-xl flex">
                Locate the Formula Studio button{' '}
                <img
                  src={logo}
                  className="mx-1 w-[30px] h-[30px] rounded-full"
                />
                on the bottom right of your screen
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-4 md:mb-6 gap-4">
              <input
                id="default-checkbox"
                type="checkbox"
                style={{ accentColor: '#29B367' }}
                className="w-4 h-4 text-medium bg-gray-100 border-gray-300 rounded "
              />
              <span className="text-base md:text-lg lg:text-xl">
                Ask Chat GPT to create any formula on the editor and press SHIFT
                + ENTER
              </span>
            </div>
          </li>
        </ul>
        <img
          src={demo}
          width={300}
          height={500}
          alt="demo example"
          className="rounded border border-gray-600 shadow-lg"
          style={{ boxShadow: '10px 10px 10px rgba(41, 179, 103, 0.3)' }}
        />
      </div>
    </section>
  );
};

const LogoNotion = () => (
  <svg
    width="43"
    height="44"
    viewBox="0 0 43 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="relative top-[4px] left-[4px]"
  >
    <g filter="url(#filter0_d_40_81)">
      <path
        d="M6.16612 1.55311L26.086 0.0817894C28.5329 -0.128091 29.1615 0.0133893 30.7001 1.13191L37.0588 5.61139C38.1075 6.38179 38.4567 6.59167 38.4567 7.43047V31.9979C38.4567 33.5377 37.8976 34.4485 35.9403 34.5874L12.8081 35.9885C11.3393 36.058 10.6398 35.8481 9.87052 34.8679L5.188 28.7788C4.34812 27.6581 4 26.8193 4 25.8387V4.00111C4 2.74219 4.55908 1.69243 6.16612 1.55311Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.028 1.0774L7.45921 2.4637C5.96116 2.59463 5.44 3.58406 5.44 4.76989V25.3455C5.44 26.2691 5.76451 27.0595 6.54743 28.1157L10.9124 33.8525C11.6295 34.7762 12.2815 34.9743 13.6507 34.9085L35.2143 33.589C37.0375 33.4577 37.56 32.5996 37.56 31.1492V8.00141C37.56 7.25178 37.267 7.03572 36.4046 6.39599L30.3292 2.0665C28.8952 1.01262 28.309 0.879312 26.028 1.07706V1.0774ZM14.1383 7.62253C12.3775 7.74226 11.9782 7.7694 10.9781 6.94753L8.43575 4.90353C8.17735 4.63896 8.30722 4.30892 8.95826 4.24312L26.8089 2.92466C28.308 2.79238 29.0885 3.3205 29.6748 3.78181L32.7363 6.0239C32.8672 6.09072 33.1927 6.4852 32.8011 6.4852L14.3665 7.60692L14.1383 7.62253ZM12.0856 30.9514V11.3008C12.0856 10.4426 12.3463 10.0468 13.1269 9.98028L34.3001 8.72729C35.0183 8.66182 35.3428 9.12313 35.3428 9.97994V29.4996C35.3428 30.3578 35.2119 31.0837 34.0397 31.1492L13.7782 32.3363C12.606 32.4018 12.0859 32.0073 12.0859 30.9514H12.0856ZM32.0863 12.3543C32.2162 12.9479 32.0863 13.5415 31.499 13.6093L30.5225 13.8051V28.3135C29.6745 28.7748 28.8939 29.0383 28.2415 29.0383C27.1989 29.0383 26.9385 28.7083 26.1576 27.7199L19.7714 17.5644V27.3898L21.7916 27.8522C21.7916 27.8522 21.7916 29.0394 20.1617 29.0394L15.6682 29.3029C15.5374 29.0383 15.6682 28.3793 16.1236 28.248L17.2972 27.919V14.9278L15.6686 14.7945C15.5377 14.2009 15.8632 13.3437 16.776 13.2773L21.5973 12.9493L28.2419 23.2361V14.1354L26.5482 13.9387C26.4173 13.2118 26.9385 12.6837 27.5895 12.6192L32.0863 12.3543Z"
        fill="black"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_40_81"
        x="0"
        y="-0.000427246"
        width="43"
        height="44.0011"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_40_81"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_40_81"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const LogoSheet = () => (
  <svg
    width="28"
    height="35"
    viewBox="0 0 28 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_39_27)">
      <mask
        id="mask0_39_27"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="35"
      >
        <path
          d="M17.3809 0.50061H3.01188C1.61724 0.50061 0.476166 1.54375 0.476166 2.81871V32.1813C0.476166 33.4562 1.61724 34.4994 3.01188 34.4994H24.9881C26.3827 34.4994 27.5238 33.4562 27.5238 32.1813V9.773L17.3809 0.50061Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_39_27)">
        <path
          d="M17.3809 0.50061H3.01188C1.61724 0.50061 0.476166 1.54375 0.476166 2.81871V32.1813C0.476166 33.4562 1.61724 34.4994 3.01188 34.4994H24.9881C26.3827 34.4994 27.5238 33.4562 27.5238 32.1813V9.773L21.6071 5.9095L17.3809 0.50061Z"
          fill="#0F9D58"
        />
      </g>
      <mask
        id="mask1_39_27"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="35"
      >
        <path
          d="M17.3809 0.50061H3.01188C1.61724 0.50061 0.476166 1.54375 0.476166 2.81871V32.1813C0.476166 33.4562 1.61724 34.4994 3.01188 34.4994H24.9881C26.3827 34.4994 27.5238 33.4562 27.5238 32.1813V9.773L17.3809 0.50061Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_39_27)">
        <path
          d="M7.23807 17.1136V28.3178H20.7619V17.1136H7.23807ZM13.1547 26.7724H8.92854V24.8406H13.1547V26.7724ZM13.1547 23.6816H8.92854V21.7498H13.1547V23.6816ZM13.1547 20.5908H8.92854V18.659H13.1547V20.5908ZM19.0714 26.7724H14.8452V24.8406H19.0714V26.7724ZM19.0714 23.6816H14.8452V21.7498H19.0714V23.6816ZM19.0714 20.5908H14.8452V18.659H19.0714V20.5908Z"
          fill="#F1F1F1"
        />
      </g>
      <mask
        id="mask2_39_27"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="35"
      >
        <path
          d="M17.3809 0.50061H3.01188C1.61724 0.50061 0.476166 1.54375 0.476166 2.81871V32.1813C0.476166 33.4562 1.61724 34.4994 3.01188 34.4994H24.9881C26.3827 34.4994 27.5238 33.4562 27.5238 32.1813V9.773L17.3809 0.50061Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask2_39_27)">
        <path
          d="M18.1226 9.09497L27.5238 17.6874V9.77301L18.1226 9.09497Z"
          fill="url(#paint0_linear_39_27)"
        />
      </g>
      <mask
        id="mask3_39_27"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="35"
      >
        <path
          d="M17.3809 0.50061H3.01188C1.61724 0.50061 0.476166 1.54375 0.476166 2.81871V32.1813C0.476166 33.4562 1.61724 34.4994 3.01188 34.4994H24.9881C26.3827 34.4994 27.5238 33.4562 27.5238 32.1813V9.773L17.3809 0.50061Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask3_39_27)">
        <path
          d="M17.3809 0.50061V7.4549C17.3809 8.73565 18.5157 9.773 19.9166 9.773H27.5238L17.3809 0.50061Z"
          fill="#87CEAC"
        />
      </g>
      <mask
        id="mask4_39_27"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="35"
      >
        <path
          d="M17.3809 0.50061H3.01188C1.61724 0.50061 0.476166 1.54375 0.476166 2.81871V32.1813C0.476166 33.4562 1.61724 34.4994 3.01188 34.4994H24.9881C26.3827 34.4994 27.5238 33.4562 27.5238 32.1813V9.773L17.3809 0.50061Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask4_39_27)">
        <path
          d="M3.01188 0.50061C1.61724 0.50061 0.476166 1.54375 0.476166 2.81871V3.01188C0.476166 1.73693 1.61724 0.693785 3.01188 0.693785H17.3809V0.50061H3.01188Z"
          fill="white"
          fillOpacity="0.2"
        />
      </g>
      <mask
        id="mask5_39_27"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="35"
      >
        <path
          d="M17.3809 0.50061H3.01188C1.61724 0.50061 0.476166 1.54375 0.476166 2.81871V32.1813C0.476166 33.4562 1.61724 34.4994 3.01188 34.4994H24.9881C26.3827 34.4994 27.5238 33.4562 27.5238 32.1813V9.773L17.3809 0.50061Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask5_39_27)">
        <path
          d="M24.9881 34.3062H3.01188C1.61724 34.3062 0.476166 33.2631 0.476166 31.9881V32.1813C0.476166 33.4562 1.61724 34.4994 3.01188 34.4994H24.9881C26.3827 34.4994 27.5238 33.4562 27.5238 32.1813V31.9881C27.5238 33.2631 26.3827 34.3062 24.9881 34.3062Z"
          fill="#263238"
          fillOpacity="0.2"
        />
      </g>
      <mask
        id="mask6_39_27"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="35"
      >
        <path
          d="M17.3809 0.50061H3.01188C1.61724 0.50061 0.476166 1.54375 0.476166 2.81871V32.1813C0.476166 33.4562 1.61724 34.4994 3.01188 34.4994H24.9881C26.3827 34.4994 27.5238 33.4562 27.5238 32.1813V9.773L17.3809 0.50061Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask6_39_27)">
        <path
          d="M19.9166 9.77299C18.5157 9.77299 17.3809 8.73564 17.3809 7.4549V7.64807C17.3809 8.92882 18.5157 9.96617 19.9166 9.96617H27.5238V9.77299H19.9166Z"
          fill="#263238"
          fillOpacity="0.1"
        />
      </g>
      <path
        d="M17.3809 0.50061H3.01188C1.61724 0.50061 0.476166 1.54375 0.476166 2.81871V32.1813C0.476166 33.4562 1.61724 34.4994 3.01188 34.4994H24.9881C26.3827 34.4994 27.5238 33.4562 27.5238 32.1813V9.773L17.3809 0.50061Z"
        fill="url(#paint1_radial_39_27)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_39_27"
        x1="488.231"
        y1="82.8703"
        x2="488.231"
        y2="868.456"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#263238" stopOpacity="0.2" />
        <stop offset="1" stopColor="#263238" stopOpacity="0.02" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_39_27"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.1644 67.6971) scale(4361.39 3987.09)"
      >
        <stop stopColor="white" stopOpacity="0.1" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <clipPath id="clip0_39_27">
        <rect width="28" height="35" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const LogoExcel = () => (
  <svg
    width="32"
    height="30"
    viewBox="0 0 32 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.86 13.9601L7.35001 11.7601V28.0501C7.3539 28.2261 7.39243 28.3996 7.4634 28.5607C7.53436 28.7218 7.63637 28.8673 7.7636 28.989C7.89082 29.1106 8.04077 29.206 8.20488 29.2697C8.36898 29.3334 8.54402 29.3641 8.72001 29.3601H30.27C30.4468 29.3615 30.6221 29.3278 30.7859 29.261C30.9496 29.1943 31.0985 29.0958 31.224 28.9712C31.3495 28.8466 31.4491 28.6985 31.5171 28.5352C31.585 28.372 31.62 28.1969 31.62 28.0201V22.0201L19.86 13.9601Z"
      fill="#2C5A3A"
    />
    <path
      d="M19.86 0.000148733H8.72001C8.54021 -0.00252042 8.36168 0.03076 8.19492 0.0980358C8.02815 0.165312 7.87651 0.265227 7.74889 0.391916C7.62127 0.518605 7.52024 0.669514 7.45174 0.835783C7.38325 1.00205 7.34866 1.18033 7.35001 1.36015V7.36015L19.84 14.7101L26.46 16.9101L31.6 14.7101V7.36015L19.86 0.000148733Z"
      fill="#4C9D6B"
    />
    <path d="M7.35001 7.36017H19.86V14.7102H7.35001V7.36017Z" fill="#367947" />
    <path
      opacity="0.1"
      d="M16.35 5.88013H7.35001V24.2501H16.35C16.708 24.2501 17.0514 24.1079 17.3046 23.8547C17.5578 23.6015 17.7 23.2582 17.7 22.9001V7.23013C17.6974 6.87289 17.5543 6.53103 17.3017 6.27843C17.0491 6.02582 16.7072 5.88274 16.35 5.88013Z"
      fill="black"
    />
    <path
      opacity="0.2"
      d="M15.58 6.62018H7.35001V24.9902H15.56C15.9155 24.985 16.2548 24.8407 16.5053 24.5884C16.7557 24.3361 16.8974 23.9957 16.9 23.6402V7.96018C16.9 7.60823 16.7616 7.27039 16.5146 7.01966C16.2676 6.76893 15.9319 6.62543 15.58 6.62018Z"
      fill="black"
    />
    <path
      opacity="0.2"
      d="M15.58 6.62018H7.35001V23.5202H15.56C15.9155 23.515 16.2548 23.3707 16.5053 23.1184C16.7557 22.8661 16.8974 22.5257 16.9 22.1702V7.96018C16.9 7.60823 16.7616 7.27039 16.5146 7.01966C16.2676 6.76893 15.9319 6.62543 15.58 6.62018Z"
      fill="black"
    />
    <path
      opacity="0.2"
      d="M14.84 6.62018H7.35001V23.5202H14.82C15.1772 23.5176 15.5191 23.3745 15.7717 23.1219C16.0243 22.8693 16.1674 22.5274 16.17 22.1702V7.96018C16.1674 7.60731 16.0268 7.26947 15.7782 7.01902C15.5296 6.76856 15.1928 6.6254 14.84 6.62018Z"
      fill="black"
    />
    <path
      d="M1.35 6.62015H14.84C15.0168 6.61883 15.1921 6.65252 15.3559 6.71927C15.5196 6.78602 15.6685 6.88452 15.794 7.00908C15.9195 7.13364 16.0191 7.28181 16.087 7.44504C16.155 7.60827 16.19 7.78334 16.19 7.96015V21.4302C16.1913 21.6078 16.1573 21.784 16.0899 21.9483C16.0226 22.1127 15.9232 22.2621 15.7976 22.3877C15.6719 22.5133 15.5226 22.6127 15.3582 22.6801C15.1938 22.7475 15.0177 22.7815 14.84 22.7802H1.35C0.991958 22.7802 0.648581 22.6379 0.395407 22.3847C0.142233 22.1316 0 21.7882 0 21.4302V7.96015C0.00263938 7.60385 0.146035 7.26303 0.398924 7.01202C0.651812 6.761 0.993684 6.62014 1.35 6.62015Z"
      fill="url(#paint0_linear_39_3)"
    />
    <path
      d="M4.19 19.0802L7.03 14.6902L4.43 10.3602H6.52L7.94 13.1502C8.07 13.4202 8.16 13.6102 8.21 13.7402L8.51 13.1302L10.03 10.3602H11.95L9.29 14.6602L12.02 19.0802H10.02L8.35 16.0102C8.27257 15.8805 8.2089 15.7431 8.16 15.6002C8.11101 15.7399 8.04732 15.8739 7.97 16.0002L6.25 19.0802H4.19Z"
      fill="white"
    />
    <path
      d="M30.27 0.00012207H19.86V7.36012H31.62V1.36012C31.62 1.00208 31.4778 0.658703 31.2246 0.405529C30.9714 0.152355 30.628 0.0101223 30.27 0.0101223V0.00012207Z"
      fill="#60BD84"
    />
    <path d="M19.86 14.7001H31.62V22.0501H19.86V14.7001Z" fill="#367947" />
    <defs>
      <linearGradient
        id="paint0_linear_39_3"
        x1="2.83"
        y1="5.56015"
        x2="13.38"
        y2="23.8302"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3E8254" />
        <stop offset="0.5" stopColor="#387B49" />
        <stop offset="1" stopColor="#2C6437" />
      </linearGradient>
    </defs>
  </svg>
);

export default Hero;
