<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    
    
    <xsl:output encoding="UTF-8" indent="yes" method="xhtml"/>
    
    <xsl:template match="/">
        <xsl:result-document href="Arqueolo/index.html">
        <html>
            
            <head>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h1>Locais Arqueológicos</h1>
                <h3>Indice de locais</h3>
                <ol>
                    <xsl:apply-templates select="//CONCEL[not(preceding::CONCEL = .)]">
                        <xsl:sort select="."/>
                    </xsl:apply-templates>
                </ol>
            </body>
        </html>

        </xsl:result-document>
        <xsl:apply-templates mode="conteudo"/>
    </xsl:template>
    
    <!-- template conteudo -->
    <xsl:template match="ARQELEM" mode="conteudo">
        <xsl:result-document href="Arqueolo/{count(preceding::ARQELEM)+1}.html">
            <html>
                <head>
                    <meta charset="UTF-8"/>
                </head>
                <body>
                    <table border="1">
                        <tr>
                            <td>
                                <xsl:if test="preceding-sibling::ARQELEM">
                                    <a href="{count(preceding-sibling::ARQELEM)}"
                                        >Anterior</a>
                                </xsl:if>
                            </td>
                            <td>
                                <a href="index">Indice</a>
                            </td>
                            <td>
                                <xsl:if test="following-sibling::ARQELEM">
                                    <a href="{count(following-sibling::ARQELEM)+2}"
                                        >Seguinte</a>
                                </xsl:if>
                            </td>
                        </tr>
                    </table>
                    <h1 align="center"><b>
                        <xsl:value-of select="IDENTI"/>
                    </b>
                    </h1>
                    <br/><hr/>
                    <b>Lugar: </b><xsl:value-of select="LUGAR"/><br/>
                    <b>Freguesia: </b><xsl:value-of select="FREGUE"/><br/>
                    <b>Acesso: </b><xsl:value-of select="ACESSO"/><br/>
                    <b>Desarq: </b><xsl:value-of select="DESARQ"/><br/>
                    <b>Interp: </b><xsl:value-of select="INTERP"/><br/>
                    <b>Bibliografia: </b><xsl:value-of select="BIBLIO"/><br/>
                    <b>Autor </b><i><xsl:value-of select="AUTOR"/></i><br/>
                    
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>

    <xsl:template match="CONCEL">
        <xsl:variable name="p" select="."/>
        <li>
            <xsl:value-of select="."/>
            <ol>
                <xsl:apply-templates select="//IDENTI[$p= ../CONCEL]">
                    <xsl:sort select="."/>
                </xsl:apply-templates>
            </ol>
        </li>
    </xsl:template>
    <xsl:template match="IDENTI">
        <li>
            <a href="{count(preceding::IDENTI)+1}">
                <xsl:value-of select="."/>
            </a>
        </li>
    </xsl:template>
</xsl:stylesheet>
