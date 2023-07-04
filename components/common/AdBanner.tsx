'use client';
import { ClassAttributes, InsHTMLAttributes, useEffect} from 'react';

import {useRouter} from "next/router";
import {Adsense} from "@ctrl/react-adsense";
import Script from "next/script";

// const Adsense = dynamic(
//     () => import('@ctrl/react-adsense').then(module=>module.Adsense),
// {ssr: false}
// );



const AdBanner = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLModElement> & InsHTMLAttributes<HTMLModElement>) => {
    const { isReady, route } = useRouter();

    useEffect(() => {
        // if (!isReady) {
        //     return void 0;
        // }
        try {
            window.adsbygoogle = window.adsbygoogle || []
            window.adsbygoogle.push({})
            // (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(`And failed ${err}`);
        }
    }, [route]);

    return (
        <>
            {/*<Adsense*/}
            {/*    key={route}*/}
            {/*    client="ca-pub-9216561737791732"*/}
            {/*    slot="5843715081"*/}
            {/*    style={{ display: 'block' }}*/}
            {/*    layout="in-article"*/}
            {/*    format="fluid"*/}
            {/*    {...props}*/}
            {/*/>*/}
            <Script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9216561737791732"
                    crossOrigin="anonymous"
                    strategy="lazyOnload"
                    />
            <div id="block" style={{display: "flex", justifyContent: 'center'}}>
                <ins
                    key={route}
                    className="adsbygoogle adbanner-customize"
                    style={{
                        display:'inline-block',
                        width:'728px',
                        height:'90px',
                        overflow: 'hidden',
                    }}
                    data-ad-client={'ca-pub-9216561737791732'}
                    data-ad-slot="5843715081"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                    {...props}
                />
            </div>
</>


    );
};

export default AdBanner



