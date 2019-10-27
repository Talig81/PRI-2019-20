<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    <xsl:template match="/">
        <xsl:result-document href="project/project.html">
            <html>
                <head>
                    <title>Project Record</title>
                    <meta charset="UTF-8"/>
                </head>
                <body>
                    <h1 align="center"><b>Project Record</b></h1>
                    <hr/>
                    <xsl:apply-templates/>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="meta">
        <h2 align="center">META</h2>
        <table width="100%">
            <tr>
                <td><b>KEY_NAME: </b><xsl:value-of select="keyname"/></td>
                <td><b>TITLE: </b><xsl:value-of select="title"/> </td>
            </tr>
            <tr>
                <td><b>SUBTITLE: </b><xsl:value-of select="subtitle"/></td>
                <td><b>BEGIN DATE: </b><xsl:value-of select="bdate"/></td>
            </tr>
            <tr>
                <td><b>END DATE: </b><xsl:value-of select="edate"/></td>
                <td><b>--------- </b></td>
            </tr>
        </table>
        <hr/>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="supervisor">
        <h2 align="center">Supervisor</h2>
        <p><b>Name: </b><xsl:value-of select="name"></xsl:value-of></p>
        <p><b>Email: </b><a href="jcr@di.uminho.pt"><xsl:value-of select="email"></xsl:value-of></a></p>
        <p><b>Website: </b><a href="www.di.uminho.pt"><xsl:value-of select="homepage"></xsl:value-of></a></p>
        
        <hr/>
    </xsl:template>
    <xsl:template match="workteam">
        <h2 align="center">Workteam</h2>
        <xsl:apply-templates/>
        <hr/>
        </xsl:template>
        <xsl:template match="member">
        <table border="1" align="center">
            <tr>
                <td><b>Name: </b><xsl:value-of select="name"></xsl:value-of></td>
                <td><b>Email: </b><a href="{/email/text()}"><xsl:value-of select="email"></xsl:value-of></a></td>
                <td><b>PHOTO</b></td>
            </tr>
        </table>
           
    </xsl:template>
    <xsl:template match="abstract">
        <h2 align="center">Abstract</h2>
        <xsl:for-each select="p"><p><xsl:value-of select="."/></p></xsl:for-each>
    </xsl:template>
  
    
</xsl:stylesheet>