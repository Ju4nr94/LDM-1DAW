<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Sistema de Biblioteca</title>
                <link rel="stylesheet" href="./style.css"/>
            </head>
            <body>
                <h1>Sistema de Biblioteca</h1>
                <div id="libros">
                    <h2>Libros</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Autor(es)</th>
                                <th>Año</th>
                                <th>Editorial</th>
                                <th>Categoría</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="biblioteca/libros/libro">
                                <tr>
                                    <td><xsl:value-of select="id"/></td>
                                    <td><xsl:value-of select="nombre"/></td>
                                    <td>
                                        <xsl:for-each select="autores/autor">
                                            <xsl:value-of select="."/>
                                            <xsl:if test="position() != last()">, </xsl:if>
                                        </xsl:for-each>
                                    </td>
                                    <td><xsl:value-of select="año"/></td>
                                    <td><xsl:value-of select="editorial"/></td>
                                    <td><xsl:value-of select="categoria"/></td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>
                <div id="usuarios">
                    <h2>Usuarios</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="biblioteca/usuarios/usuario">
                                <tr>
                                    <td><xsl:value-of select="id"/></td>
                                    <td><xsl:value-of select="nombre"/></td>
                                    <td>
                                        <xsl:for-each select="apellido">
                                            <xsl:value-of select="."/> 
                                            <xsl:if test="position() != last()">, </xsl:if>
                                        </xsl:for-each>
                                    </td>
                                    <td>
                                        <xsl:for-each select="email">
                                            <xsl:value-of select="."/><br/>
                                        </xsl:for-each>
                                    </td>
                                    <td><xsl:value-of select="tipo"/></td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>
                <div id="prestamos">
                    <h2>Préstamos</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID Usuario</th>
                                <th>Fecha Inicio</th>
                                <th>Fecha Fin</th>
                                <th>IDs Libros</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="biblioteca/prestamos/prestamo">
                                <tr>
                                    <td><xsl:value-of select="id_usuario"/></td>
                                    <td><xsl:value-of select="fecha_inicio"/></td>
                                    <td><xsl:value-of select="fecha_fin"/></td>
                                    <td>
                                        <xsl:for-each select="id_libros/id">
                                            <xsl:value-of select="."/>
                                            <xsl:if test="position() != last()">, </xsl:if>
                                        </xsl:for-each>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>