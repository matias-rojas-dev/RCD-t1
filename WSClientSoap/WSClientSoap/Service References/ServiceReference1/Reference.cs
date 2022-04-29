﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código fue generado por una herramienta.
//     Versión de runtime:4.0.30319.42000
//
//     Los cambios en este archivo podrían causar un comportamiento incorrecto y se perderán si
//     se vuelve a generar el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WSClientSoap.ServiceReference1 {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(Namespace="http://ws/", ConfigurationName="ServiceReference1.MetodosRCD")]
    public interface MetodosRCD {
        
        // CODEGEN: El parámetro 'return' requiere información adicional de esquema que no se puede capturar con el modo de parámetros. El atributo específico es 'System.Xml.Serialization.XmlElementAttribute'.
        [System.ServiceModel.OperationContractAttribute(Action="http://ws/MetodosRCD/ValidacionRutRequest", ReplyAction="http://ws/MetodosRCD/ValidacionRutResponse")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        [return: System.ServiceModel.MessageParameterAttribute(Name="return")]
        WSClientSoap.ServiceReference1.ValidacionRutResponse ValidacionRut(WSClientSoap.ServiceReference1.ValidacionRutRequest request);
        
        // CODEGEN: El parámetro 'return' requiere información adicional de esquema que no se puede capturar con el modo de parámetros. El atributo específico es 'System.Xml.Serialization.XmlElementAttribute'.
        [System.ServiceModel.OperationContractAttribute(Action="http://ws/MetodosRCD/ValidacionNombreRequest", ReplyAction="http://ws/MetodosRCD/ValidacionNombreResponse")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        [return: System.ServiceModel.MessageParameterAttribute(Name="return")]
        WSClientSoap.ServiceReference1.ValidacionNombreResponse ValidacionNombre(WSClientSoap.ServiceReference1.ValidacionNombreRequest request);
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(WrapperName="ValidacionRut", WrapperNamespace="http://ws/", IsWrapped=true)]
    public partial class ValidacionRutRequest {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://ws/", Order=0)]
        [System.Xml.Serialization.XmlElementAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified)]
        public string rut;
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://ws/", Order=1)]
        [System.Xml.Serialization.XmlElementAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified)]
        public string dv;
        
        public ValidacionRutRequest() {
        }
        
        public ValidacionRutRequest(string rut, string dv) {
            this.rut = rut;
            this.dv = dv;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(WrapperName="ValidacionRutResponse", WrapperNamespace="http://ws/", IsWrapped=true)]
    public partial class ValidacionRutResponse {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://ws/", Order=0)]
        [System.Xml.Serialization.XmlElementAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified)]
        public bool @return;
        
        public ValidacionRutResponse() {
        }
        
        public ValidacionRutResponse(bool @return) {
            this.@return = @return;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(WrapperName="ValidacionNombre", WrapperNamespace="http://ws/", IsWrapped=true)]
    public partial class ValidacionNombreRequest {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://ws/", Order=0)]
        [System.Xml.Serialization.XmlElementAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified)]
        public string nombreCompleto;
        
        public ValidacionNombreRequest() {
        }
        
        public ValidacionNombreRequest(string nombreCompleto) {
            this.nombreCompleto = nombreCompleto;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(WrapperName="ValidacionNombreResponse", WrapperNamespace="http://ws/", IsWrapped=true)]
    public partial class ValidacionNombreResponse {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://ws/", Order=0)]
        [System.Xml.Serialization.XmlElementAttribute("return", Form=System.Xml.Schema.XmlSchemaForm.Unqualified, IsNullable=true)]
        public string[] @return;
        
        public ValidacionNombreResponse() {
        }
        
        public ValidacionNombreResponse(string[] @return) {
            this.@return = @return;
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface MetodosRCDChannel : WSClientSoap.ServiceReference1.MetodosRCD, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class MetodosRCDClient : System.ServiceModel.ClientBase<WSClientSoap.ServiceReference1.MetodosRCD>, WSClientSoap.ServiceReference1.MetodosRCD {
        
        public MetodosRCDClient() {
        }
        
        public MetodosRCDClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public MetodosRCDClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public MetodosRCDClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public MetodosRCDClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        WSClientSoap.ServiceReference1.ValidacionRutResponse WSClientSoap.ServiceReference1.MetodosRCD.ValidacionRut(WSClientSoap.ServiceReference1.ValidacionRutRequest request) {
            return base.Channel.ValidacionRut(request);
        }
        
        public bool ValidacionRut(string rut, string dv) {
            WSClientSoap.ServiceReference1.ValidacionRutRequest inValue = new WSClientSoap.ServiceReference1.ValidacionRutRequest();
            inValue.rut = rut;
            inValue.dv = dv;
            WSClientSoap.ServiceReference1.ValidacionRutResponse retVal = ((WSClientSoap.ServiceReference1.MetodosRCD)(this)).ValidacionRut(inValue);
            return retVal.@return;
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        WSClientSoap.ServiceReference1.ValidacionNombreResponse WSClientSoap.ServiceReference1.MetodosRCD.ValidacionNombre(WSClientSoap.ServiceReference1.ValidacionNombreRequest request) {
            return base.Channel.ValidacionNombre(request);
        }
        
        public string[] ValidacionNombre(string nombreCompleto) {
            WSClientSoap.ServiceReference1.ValidacionNombreRequest inValue = new WSClientSoap.ServiceReference1.ValidacionNombreRequest();
            inValue.nombreCompleto = nombreCompleto;
            WSClientSoap.ServiceReference1.ValidacionNombreResponse retVal = ((WSClientSoap.ServiceReference1.MetodosRCD)(this)).ValidacionNombre(inValue);
            return retVal.@return;
        }
    }
}
