import { useEffect } from "react";

export default function useSeo({ titre, description }: IPropSeo) {
    useEffect(() => {
        document.title = titre;
        let meta = document.querySelector("meta[name='description']") as HTMLMetaElement;
        if (!meta) {
            meta = document.createElement("meta");
            meta.name = "description";
            document.head.appendChild(meta);
        }
        meta.content = description;
    }, [titre, description])
}