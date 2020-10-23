/**
 *
 * Gulp / svgmin use this template to create the svgs.js file that allows
 * our javascript to embed the svgs
 *
 **/
const svgs = {
    <%
  _.forEach( icons, ( icon ) => {
    const hasStyle = icon.svg.style != null
    const hasDef = icon.svg.defs != null
    const needDef = hasDef || hasStyle
    const style = !hasStyle ? `` : `<style>${icon.svg.style}</style>`
    const defs = !needDef ? `` : `<defs>${hasDef ? icon.svg.defs : `` }${style}</defs>`
    const content = `${defs }${icon.svg.content}`
    const width = /(\d+)(\w+)/.exec(icon.width)
    const height = /(\d+)(\w+)/.exec(icon.height)
    const preserveAspectRatio = icon.svg.originalAttributes.preserveAspectRatio || ``
    const sizes = {
      width: {
        size: parseFloat(width[1], 10),
        unit: width[2],
      },
      height: {
        size: parseFloat(height[1], 10),
        unit: height[2],
      },
    }
  %>
    "<%= icon.id %>": {
        'viewBox': `<%= icon.svg.viewBox %>`,
        content: `<%= content %>`,
    },
    <% }); %>
};