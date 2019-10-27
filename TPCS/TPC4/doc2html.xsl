<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:template match="doc">
        <html>
            <head>
                <style>
                    table {
                    border-collapse: collapse;
                    width: 100%;
                    }
                    
                    th, td {
                    text-align: center;
                    padding: 10px;
                    }
                    th.clas{
                    background-color: #fddcdc;
                    }
                </style>
                <title>Documento doc2HTML</title>
                <meta charset= "UTF-8"/>
            </head>
            <body>
                <h1 align="center"><xsl:value-of select="prov"/></h1>
                <h3 align="center"><xsl:value-of select="local"/></h3>
                <hr/>
                <table>
                    <tr>
                        <th>Músico</th>
                        <th>Titulo</th>
                        <th>Duração</th>
                        <th>Ficheiro</th>
                    </tr>
                    <tr>
                        <td><xsl:value-of select="musico"/></td>
                        <td><xsl:value-of select="tit"/></td>
                        <td><xsl:value-of select="duracao"/></td>
                        <td><a href="{/doc/file}"/><xsl:value-of select="file"/></td>
                    </tr>
                </table>
                <hr/>
                <h2 align="center">Observações</h2>
                <p><td><xsl:value-of select="obs"/></td></p>
            </body>
        </html>
    </xsl:template>
    
</xsl:stylesheet>