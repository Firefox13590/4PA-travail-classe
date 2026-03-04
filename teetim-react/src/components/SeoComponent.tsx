import { useEffect } from "react"

export default function Seo(props: IPropSeo){


    useEffect(() => {
        document.title = props.titre;
        let meta = document.querySelector("meta[name='description']") as HTMLMetaElement;
        if(!meta){
            meta = document.createElement("meta");
            meta.name = "description";
            document.head.appendChild(meta);
        }
        meta.content = props.description;
    }, [props.titre, props.description])

    return null
}