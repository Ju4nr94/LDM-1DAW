<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" />
    
    <xsl:template match="/">
        <html>
            <head>
                <title>GeoClima</title>
                <link rel="stylesheet" href="style.css"/>
            </head>
            <body>
                <h1>GeoClima - Estado del Tiempo</h1>
                <p class="fecha-reporte">Reporte correspondiente al día: <xsl:value-of select="reporte_meteorologico/fecha" /></p>
                
                <div id="ciudad">
                    <xsl:for-each select="reporte_meteorologico/localidad">
                        <div class="tarjeta">
                            <h2><xsl:value-of select="@nombre" /></h2>
                            <p><xsl:value-of select="@provincia" /></p>
                            <p><b>Temperatura: </b><xsl:value-of select="temperatura"></xsl:value-of>
                                <xsl:choose>
                                    <xsl:when test="temperatura > 25">
                                        <span class="aviso-calor"> ☀️ ¡Altas temperaturas! 🥵</span>
                                    </xsl:when>
                                </xsl:choose>
                            </p>
                            <p><b>Cielo: </b><xsl:value-of select="estado_cielo" /></p>
                            <p><b>Viento: </b><xsl:value-of select="viento" /> km/h, dirección <xsl:value-of select="viento/@direccion" /></p>
                            <p><b>Estado del Mar: </b>
                                <xsl:choose>
                                    <xsl:when test="estado_mar = 'bravo'">
                                        <span class="aviso-mar">⚠️ ¡Mar Bravo! Precaución 🌊</span>
                                    </xsl:when>
                                    <xsl:when test="estado_mar = 'en calma'">
                                        <span class="calma">en calma</span>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="estado_mar" />
                                    </xsl:otherwise>
                                </xsl:choose>
                            </p>
                        </div>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>