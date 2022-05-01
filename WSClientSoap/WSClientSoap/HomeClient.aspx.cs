using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text.RegularExpressions;


namespace WSClientSoap
{
    public partial class HomeClient : System.Web.UI.Page
    {

        WSServerSOAP.MetodosRCDClient ws = new WSServerSOAP.MetodosRCDClient();

        protected void name_result_Click(object sender, EventArgs e)
        {

            Log myLog = new Log(@"C:\Users\maigr\OneDrive\Escritorio\RCD-t1\WSClientSoap\WSClientSoap\release");
            
            myLog.Add("Llamado al método 'ValidacionNombre'");

            String dato = name_inputCompleteName.Text.ToString();

            StringBuilder sb = new StringBuilder();

            litMarkup.Text = sb.ToString();

            try
            {
                name_response.Text = "";
                string[] name = ws.ValidacionNombre(dato);
                int sizeName = name.Length;

                if (sizeName > 4)
                {
                    myLog.Add("Ha ingresado correctamente los campos necesarios para realizar la operación");
                    int[] mainValues = { name.Length - 3 };
                    foreach (var item in name)
                    { // 0
                        foreach (var index in mainValues)
                        { // nombres: 0
                            if (Array.IndexOf(name, item) == index || Array.IndexOf(name, item) == 0)
                            {
                                sb.Append("<ul>");
                                sb.Append("<h2>" + item + "</h2>");
                            }

                            if (!Array.Exists(mainValues, element => element == Array.IndexOf(name, item)) && Array.IndexOf(name, item) != 0)
                            {
                                sb.Append("<li>" + item + "</li>");
                            }

                        } // end first for
                        sb.Append("</ul>");
                    } // end first for

                    myLog.Add("No ha habido problemas. Se ha completado exitosamente la operación ");
                    litMarkup.Text = sb.ToString();
                }
                else
                {
                        name_response.Text = "Por favor, ingrese como mínimo dos apellidos";
                        myLog.Add("Error: el usuario no ha ingresado la cantidad mínima de nombres");

                }
            }
            catch
            {
                name_response.Text = "Ha ingresado solo un nombre. Por favor, ingrese dos apellidos";
                myLog.Add("Error: el usuario no ha ingresado la cantidad mínima de nombres: solo ha ingresado un nombre o apellido");
            }
        }

        protected void rut_result_Click(object sender, EventArgs e)
        {

            Log myLog = new Log(@"C:\Users\maigr\OneDrive\Escritorio\RCD-t1\WSClientSoap\WSClientSoap\release");
            myLog.Add("Llamado al método 'ValidacionRut'");

            String rut = rut_withoutCheckCode.Text.ToString();
            String dv = rut_checkCode.Text.ToString();
            String[] posibleValuesDv = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "K", "k" };
            var check = Array.Exists(posibleValuesDv, element => element == dv);

            myLog.Add("Se han recibido tanto el rut sin dígito verificador como el mismo dígito verificador");

            if (check == true)
            {
                if ((ws.ValidacionRut(rut, dv).ToString()).Equals("True"))
                {
                    rut_response.Text = "El digito validador ingresado es correcto";
                    myLog.Add("No ha habido problemas. Se ha completado exitosamente la operación");
                }
                else
                {
                    rut_response.Text = "Oops! El digito verificador no corresponde";
                    myLog.Add("Error: el dígito verificador que ha ingresado no corresponde al RUT");

                }
            }
            else
            {
                rut_response.Text = "Error en el dígito verificador";
                myLog.Add("Error: el dígito que ha ingresado no está permitido");

            }
        }
    }
}