import Script from 'next/script'

export default function Home() {
  const onLoad = () => {
    new Superpeer.Widget({
      embed: { type: "inline", wrapperSelector: ".sp-widget-wrapper" },
      config: { username: "ketcap", serviceSlug: "" }
    })
  }

  return (
    <>
      <Script src="https://widgets.superpeer.com/widget.js" onLoad={onLoad} />
      <link rel="stylesheet" type="text/css" href="https://widgets.superpeer.com/widget.css" />
      <div className="sp-widget-wrapper" style={{ width: 1280, height: 800 }}></div>
    </>
  );
}
