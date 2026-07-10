import React from "react";

export function Section1({ data }) {
  return (
    <section>
      <div className="container bg-white 2xl:max-w-[1400px] mx-auto border-x border-gray-200 border-dashed p-4 py-12 lg:py-24 border-t font-grotesk">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-xs flex items-center font-medium uppercase text-gray-600 gap-2">
              {data.icon}
              {data.subtitle}
            </p>
            {/* <h3 className="text-2xl md:text-3xl lg:text-4xl mt-8 font-semibold tracking-tight text-gray-800 md:text-balance"> */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-5 tracking-tight text-black/85 md:text-balance">
              {data.title}
            </h3>
            <p className="text-md mt-2 font-medium tracking-tight leading-snug text-gray-600">
              {data.description}
              <br /> <br />
              {data.description2}
            </p>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2"
            >
              {data.features.map((feature, index) => (
                <li
                  key={index}
                  // className="flex items-center gap-2 text-gray-800"
                  className="text-sm font-medium text-black/65 tracking-tight flex items-center gap-2 mb-2"
                >
                  {feature.icon}
                  <p className="text-sm font-medium leading-6">
                    {feature.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div
            aria-hidden="true"
            className="relative flex flex-col items-center h-full p-8 overflow-hidden shadow outline-1 outline-gray-200 bg-gray-100 rounded-xl "
          >
            <div className="absolute inset-0 flex items-center justify-center w-full">
              <div className="relative w-full mx-auto overflow-hidden overflow-x-hidden text-xs text-gray-800">
                <div className="relative flex items-center px-4 py-1 bg-teal-300 border-teal-600 border-dashed animate-marquee whitespace-nowrap w-max border-y">
                  STAT/34PQ-A24-7891#SECURE TERMINAL ACCESS#SYSTEM ONLINE
                  7856443127890654231099876 ID:NETWORK-PRIME
                  TL93/alpha/2.5.8/active NODE:CENTRAL-HUB-07 UPTIME:3278.45h
                  PACKET_INTEGRITY:99.87% ROUTING_TABLE:UPDATED ENV:PRODUCTION
                  MEMORY:64GB/128GB CPU:32% THERMAL:NOMINAL
                  AUTH_LEVEL:ADMINISTRATOR
                </div>
                <div className="relative flex items-center px-4 py-1 bg-yellow-300 border-yellow-600 border-dashed animate-slowMarquee whitespace-nowrap w-max border-y">
                  CONN/95BT-R38-1265#DATA STREAM ACTIVE#BUFFER STABLE
                  3321567456789023418765432 STATUS:TRANSMITTING
                  FS47/beta/9.3.1/nominal BANDWIDTH:1.28TB/s LATENCY:4.7ms
                  ENCRYPTION:AES-256 PROTOCOL:TCP/IPV6 FIREWALL:ENABLED
                  GATEWAY:192.168.0.1 DNS:PRIMARY VPN:CONNECTED
                  LOCATION:SECURE-FACILITY-12
                </div>
                <div className="relative flex items-center px-4 py-1 bg-blue-300 border-blue-600 border-dashed animate-marquee whitespace-nowrap w-max border-y">
                  PROC/72KM-D19-6543#RUNTIME ENVIRONMENT#TASK QUEUE
                  1122334455667788990011223 MODE:PRIORITY-HIGH
                  VX26/gamma/1.7.4/running THREADS:128 PROCESS_ID:45921
                  SCHEDULER:REALTIME DEPENDENCIES:LOADED COMPILER:V12.4.5
                  BUILD:STABLE-8734 CACHE:OPTIMIZED STACK:4096MB HEAP:16GB
                  ARCHITECTURE:X64 VIRTUALIZED:TRUE
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center max-w-[50%] relative z-10 h-40 my-auto">
              <div className="flex flex-col items-center justify-center w-full h-40 px-20 font-mono text-xs font-medium bg-white rounded-lg shadow-xl outline-2 hover:scale-120 hover:bg-white/50 hover:backdrop-blur duration-300 outline-gray-50 shadow-gray-800/30 transition-all hover:outline-transparent">
                <svg
                  viewBox="0 0 2424 399"
                  fill="none"
                  className="text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M495.312 57.6271L418.157 394.82H286.709L247.656 203.363L208.602 394.82H77.1541L-0.000238385 57.6271H113.826L144.307 270.04L190.028 57.6271H305.283L351.005 270.04L381.485 57.6271H495.312ZM769.452 258.133C769.452 265.436 768.976 272.421 768.024 279.089H597.998C599.586 302.267 609.27 313.856 627.05 313.856C638.48 313.856 646.736 308.617 651.816 298.139H763.737C759.927 317.19 751.831 334.335 739.448 349.575C727.383 364.498 711.984 376.405 693.251 385.295C674.835 393.868 654.515 398.154 632.289 398.154C605.618 398.154 581.805 392.598 560.85 381.485C540.212 370.372 524.019 354.497 512.271 333.859C500.841 312.903 495.126 288.455 495.126 260.515C495.126 232.574 500.841 208.285 512.271 187.647C524.019 166.691 540.212 150.657 560.85 139.544C581.805 128.431 605.618 122.875 632.289 122.875C658.96 122.875 682.614 128.431 703.252 139.544C724.208 150.339 740.4 165.897 751.831 186.218C763.579 206.538 769.452 230.51 769.452 258.133ZM662.294 232.891C662.294 224.001 659.436 217.333 653.721 212.888C648.006 208.126 640.862 205.744 632.289 205.744C613.556 205.744 602.602 214.793 599.427 232.891H662.294ZM884.808 162.881C891.476 150.498 901.001 140.814 913.384 133.829C926.084 126.526 941.166 122.875 958.629 122.875C979.584 122.875 998.476 128.431 1015.3 139.544C1032.13 150.339 1045.31 166.215 1054.83 187.17C1064.68 207.808 1069.6 232.256 1069.6 260.515C1069.6 288.773 1064.68 313.38 1054.83 334.335C1045.31 354.973 1032.13 370.848 1015.3 381.961C998.476 392.757 979.584 398.154 958.629 398.154C941.166 398.154 926.084 394.662 913.384 387.676C901.001 380.374 891.476 370.531 884.808 358.148V394.82H779.078V42.3867H884.808V162.881ZM962.439 260.515C962.439 246.227 958.787 235.114 951.485 227.176C944.182 219.239 934.816 215.27 923.385 215.27C911.955 215.27 902.589 219.239 895.286 227.176C887.983 235.114 884.332 246.227 884.332 260.515C884.332 274.802 887.983 285.915 895.286 293.853C902.589 301.791 911.955 305.759 923.385 305.759C934.816 305.759 944.182 301.791 951.485 293.853C958.787 285.915 962.439 274.802 962.439 260.515ZM1437.6 124.304C1471.89 124.304 1498.4 134.623 1517.13 155.261C1536.19 175.899 1545.71 203.839 1545.71 239.083V394.82H1440.46V252.418C1440.46 240.988 1436.96 232.098 1429.98 225.747C1423.31 219.08 1414.26 215.746 1402.83 215.746C1391.08 215.746 1381.88 219.08 1375.21 225.747C1368.54 232.098 1365.21 240.988 1365.21 252.418V394.82H1259.95V252.418C1259.95 240.988 1256.46 232.098 1249.48 225.747C1242.81 219.08 1233.76 215.746 1222.33 215.746C1210.58 215.746 1201.37 219.08 1194.71 225.747C1188.04 232.098 1184.7 240.988 1184.7 252.418V394.82H1078.97V126.209H1184.7V162.405C1192.32 150.974 1202.64 141.767 1215.66 134.781C1229 127.796 1244.55 124.304 1262.33 124.304C1281.7 124.304 1298.85 128.59 1313.77 137.163C1328.69 145.418 1340.6 157.166 1349.49 172.406C1359.33 158.436 1371.87 147.006 1387.12 138.115C1402.36 128.908 1419.18 124.304 1437.6 124.304ZM1621.04 104.777C1602.63 104.777 1587.86 99.8556 1576.75 90.0129C1565.64 80.1702 1560.08 67.7874 1560.08 52.8645C1560.08 37.6241 1565.64 25.0826 1576.75 15.2398C1587.86 5.07957 1602.63 -0.000552419 1621.04 -0.000552419C1639.14 -0.000552419 1653.74 5.07957 1664.86 15.2398C1675.97 25.0826 1681.53 37.6241 1681.53 52.8645C1681.53 67.7874 1675.97 80.1702 1664.86 90.0129C1653.74 99.8556 1639.14 104.777 1621.04 104.777ZM1673.43 126.209V394.82H1567.7V126.209H1673.43ZM1885.49 124.304C1916.29 124.304 1940.26 134.623 1957.41 155.261C1974.87 175.899 1983.6 203.839 1983.6 239.083V394.82H1878.35V252.418C1878.35 239.718 1874.86 229.716 1867.87 222.414C1861.2 214.793 1852.15 210.983 1840.72 210.983C1828.98 210.983 1819.77 214.793 1813.1 222.414C1806.43 229.716 1803.1 239.718 1803.1 252.418V394.82H1697.37V126.209H1803.1V167.167C1811.36 154.467 1822.31 144.148 1835.96 136.21C1849.93 128.273 1866.44 124.304 1885.49 124.304ZM2172.81 304.807V394.82H2132.8C2059.14 394.82 2022.31 358.148 2022.31 284.804V214.317H1988.97V126.209H2022.31V61.4372H2128.04V126.209H2171.85V214.317H2128.04V286.709C2128.04 293.059 2129.47 297.663 2132.32 300.521C2135.5 303.378 2140.58 304.807 2147.56 304.807H2172.81ZM2308.8 398.154C2283.4 398.154 2260.86 394.027 2241.17 385.771C2221.8 377.516 2206.4 366.086 2194.97 351.481C2183.54 336.875 2177.03 320.365 2175.45 301.949H2276.89C2278.16 309.887 2281.49 315.761 2286.89 319.571C2292.61 323.381 2299.75 325.286 2308.32 325.286C2313.72 325.286 2318.01 324.175 2321.18 321.952C2324.36 319.412 2325.95 316.396 2325.95 312.903C2325.95 306.871 2322.61 302.584 2315.94 300.044C2309.28 297.504 2298.01 294.647 2282.13 291.472C2262.76 287.661 2246.73 283.534 2234.03 279.089C2221.64 274.644 2210.69 267.023 2201.17 256.228C2191.96 245.433 2187.35 230.51 2187.35 211.46C2187.35 194.949 2191.64 180.026 2200.21 166.691C2209.1 153.038 2222.12 142.402 2239.27 134.781C2256.41 126.844 2277.21 122.875 2301.66 122.875C2337.85 122.875 2366.11 131.765 2386.43 149.546C2407.07 167.326 2419.45 190.504 2423.58 219.08H2329.76C2328.17 211.777 2324.83 206.221 2319.75 202.411C2314.67 198.283 2307.85 196.219 2299.28 196.219C2293.88 196.219 2289.75 197.331 2286.89 199.553C2284.03 201.458 2282.61 204.474 2282.61 208.602C2282.61 214 2285.94 218.127 2292.61 220.985C2299.28 223.525 2309.91 226.224 2324.52 229.081C2343.89 232.891 2360.24 237.178 2373.57 241.94C2386.91 246.703 2398.5 254.958 2408.34 266.706C2418.18 278.136 2423.1 294.012 2423.1 314.332C2423.1 330.207 2418.5 344.495 2409.29 357.196C2400.08 369.896 2386.75 379.897 2369.29 387.2C2352.14 394.503 2331.98 398.154 2308.8 398.154Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section2({ data }) {
  return (
    <section>
      <div className="container bg-white 2xl:max-w-[1400px] mx-auto border-x border-gray-200 p-4 py-12 lg:py-24 border-t border-dashed font-grotesk">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-gray-200">
          {/* In between we need one border line*/}
          {data.map((item, index) => (
            <div
              className={`${
                index !== data.length - 1 ? "lg:pr-12" : "lg:pl-12 "
              }`}
              key={index}
            >
              {/* <h3 className="text-xl sm:text-xl md:text-2xl font-semibold tracking-tight text-gray-800 md:text-balance "> */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5 tracking-tight text-black/85 md:text-balance">
                {item.title}
              </h3>
              <p className="text-md mt-2 font-medium tracking-tight leading-snug text-gray-600">
                {item.description}
              </p>
              <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-8">
                {item.features.map((feature, fIndex) => (
                  <div key={fIndex}>
                    {/* <dt className="flex items-center gap-2 text-gray-800"> */}
                    <dt className="text-sm font-medium text-black/70 tracking-tight flex items-center gap-2 mb-2">
                      {feature.icon}
                      <p className="font-medium leading-6">{feature.title}</p>
                    </dt>
                    <dd className="mt-2">
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Section3({ data, className }) {
  return (
    <section>
      <div
        className={`${className}
            container bg-white 2xl:max-w-[1400px] mx-auto border-gray-200 p-4 py-12 border-dashed font-grotesk`}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-xs flex items-center gap-2 font-medium uppercase text-gray-600">
              {data.icon}
              {data.subtitle}
            </p>
            {/* <h3 className="text-2xl md:text-3xl lg:text-4xl mt-8 font-semibold tracking-tight text-gray-800 md:text-balance"> */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-5 tracking-tight text-black/85 md:text-balance">
              {data.title}
            </h3>
            <p className="text-md mt-2 font-medium tracking-tight leading-snug text-gray-600">
              {data.description}
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-2 mt-8 sm:grid-cols-2 gap-y-8">
            {data.features.map((feature, index) => (
              <div key={index}>
                <dt className="text-sm font-medium text-black/70 tracking-tight flex items-center gap-2 mb-2">
                  {feature.icon}
                  <p className="text-sm font-medium leading-6">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2">
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
