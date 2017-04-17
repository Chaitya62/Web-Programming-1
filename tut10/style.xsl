<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <h2>Site Map</h2>
    <br/>
    <p>This are the pages available</p>
    <ul>
      <xsl:for-each select="urlset/url">
    <li><xsl:value-of select="loc"/></li>
    </tr>
    </xsl:for-each>
    </ul>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>