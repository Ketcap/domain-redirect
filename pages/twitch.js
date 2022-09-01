
import Script from 'next/script'

const TwitchPage = () => {

  const onLoad = () => {
    new Twitch.Embed("twitch-embed", {
      width: 854,
      height: 480,
      channel: "devketchuptv",
    });
  }

  return (
    <>
      <Script src="https://embed.twitch.tv/embed/v1.js" onLoad={onLoad} />
      <div id="twitch-embed" />
    </>
  )
}

export default TwitchPage;