// "use client";
// import Script from "next/script";

// const GTM_ID = "GTM-KFKHH8W"; // Replace with your GTM ID

// export default function GTM() {
//   return (
//     <>
//       {/* Google Tag Manager Script */}
//       <Script
//         id="google-tag-manager"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','${GTM_ID}');
//           `,
//         }}
//       />
      
//       {/* NoScript (for users with JavaScript disabled) */}
//       <noscript>
//         <iframe
//           src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
//           height="0"
//           width="0"
//           style={{ display: "none", visibility: "hidden" }}
//         ></iframe>
//       </noscript>
//     </>
//   );
// }


"use client";
import Script from "next/script";

const GTM_ID = "GTM-KJM9LSJ3"; 
export default function GTM() {
  return (
    <>
      {/* Google Tag Manager - Head Script */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* Google Tag Manager - NoScript */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
}
