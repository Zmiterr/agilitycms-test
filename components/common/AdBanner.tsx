import { ClassAttributes, InsHTMLAttributes, useEffect} from 'react';

const AdBanner = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLModElement> & InsHTMLAttributes<HTMLModElement>) => {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div id="block">
            <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9216561737791732"
                    crossOrigin="anonymous"></script>
            <ins
                className="adsbygoogle adbanner-customize"
                style={{
                    display:'inline-block',
                    width:'728px',
                    height:'90px',
                    overflow: 'hidden',
                }}
                data-ad-client={'ca-pub-9216561737791732'}
                data-ad-slot="5843715081"
                {...props}
            />
            <script>
                {/*(adsbygoogle = window.adsbygoogle || []).push({});*/}
            </script>
        </div>

    );
};
export default AdBanner;
