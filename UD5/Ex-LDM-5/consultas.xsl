<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="./style.css"/>
                <title></title>
            </head>
            <body>
                <h1>SALIDAS INTERNACIONALES - SALDUBA</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Vuelo</th>
                            <th>Compañía</th>
                            <th>Destino</th>
                            <th>Hora</th>
                            <th>Puerta (terminal)</th>
                            <th>Estado / Notas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="aeropuerto/vuelo">
                                <tr>
                                    <td><xsl:value-of select="@codigo"/></td>
                                    <td><xsl:value-of select="compania"/></td>
                                    <td><xsl:value-of select="destino"/></td>
                                    <td><xsl:value-of select="hora_salida"/></td>
                                    <td><xsl:value-of select="puerta"/> (<xsl:value-of select="puerta/@terminal"/>)</td>
                                    <td>
                                        <xsl:if test="estado = 'en_hora'">
                                            <span style="color: blue; font-weight: bold;">EN HORA</span>
                                            <xsl:if test="retraso_mins != 0">
                                                <span style="color: orange;"> (Retraso: <xsl:value-of select="retraso_mins"/> min)</span>
                                            </xsl:if>
                                        </xsl:if>
                                        <xsl:if test="estado = 'cancelado'">
                                            <span style="color: red; font-weight: bold;">CANCELADO</span>
                                        </xsl:if>
                                        <xsl:if test="estado = 'embarcando'">
                                            <span style="color: green; font-weight: bold;">EMBARCANDO</span>
                                        </xsl:if>
                                    </td>
                                </tr>
                                
                            </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>