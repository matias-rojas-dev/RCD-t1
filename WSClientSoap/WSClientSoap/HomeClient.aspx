<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HomeClient.aspx.cs" Inherits="WSClientSoap.HomeClient" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Cliente SOAP</title>
    <link href="style.css" rel="stylesheet" >
</head>
<body>
    <div class="container">
        <header>
        <h1>Redes y comunicación de datos - Cliente SOAP</h1>
    </header>
    <div id="validateNameMethod">
        <form id="methodSoap" runat="server">

            <div class="name_method">
                <h2>Valicación del nombre</h2>
                <asp:Label ID="name_completeName" Text="Nombre completo : " runat="server" />
                <asp:TextBox ID="name_inputCompleteName" runat="server" />
                <asp:Button CssClass="button" ID="name_result" Text="Resultado" runat="server" OnClick="name_result_Click" />
                <hr />
                <asp:Label CssClass="name_response" ID="name_response" runat="server" />
               
            </div>

            <div class="rut_method">
                <h2>Validación RUT</h2>
                <asp:Label CssClass="label-rut" ID="rut" Text="Ingrese RUT sin dígito verificador : " runat="server" />
                <asp:TextBox ID="rut_withoutCheckCode" type="number" min="0" MaxLength="99999999" runat="server" />
                <br />
                <asp:Label ID="ckech" Text="Ingrese dígito verificador : " runat="server" />
                <asp:TextBox ID="rut_checkCode" type="number" min="0" MaxLength="9" runat="server" />
                <br />

                <asp:Button CssClass="button" ID="rut_result" Text="Resultado" runat="server" OnClick="rut_result_Click" />
                 <hr />

                <asp:Label CssClass="name_response" ID="rut_response" runat="server" />
            </div>

        </form>
    </div>
    <footer>
        <p>Creado por...</p>
    </footer>
    </div>
</body>
</html>
