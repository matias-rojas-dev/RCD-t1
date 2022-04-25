<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm.aspx.cs" Inherits="ClienteSoap.WebForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            RUT (Sin puntos ni digito verificador):<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            DV: <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br/>
            <asp:Button ID="Button1" runat="server" Text="validaRut" OnClick="Button1_Click"/>
        </div>
        <div>
            Nombre Completo:<asp:TextBox ID="TextBox3" runat="server"></asp:TextBox><br/>
            <asp:Button ID="Button2" runat="server" Text="Split" OnClick="Button2_Click"/>
        </div>
        <p>
            <asp:Label ID="Label1" runat="server" Text="Esperando resultados(...)"></asp:Label>
        </p>
    </form>
</body>
</html>
