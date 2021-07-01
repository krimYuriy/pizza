import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
   <ContentLoader
      className="pizza-block"
      speed={0}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <circle cx="136" cy="127" r="103" />
      <rect x="0" y="255" rx="0" ry="0" width="280" height="30" />
      <rect x="1" y="316" rx="7" ry="7" width="280" height="74" />
      <rect x="12" y="417" rx="3" ry="3" width="83" height="20" />
      <rect x="153" y="410" rx="20" ry="20" width="114" height="34" />
   </ContentLoader>
)

export default Loader