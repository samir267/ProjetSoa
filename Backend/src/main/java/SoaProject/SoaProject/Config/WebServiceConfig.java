package SoaProject.SoaProject.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.ws.config.annotation.EnableWs;
import org.springframework.ws.config.annotation.WsConfigurerAdapter;
import org.springframework.ws.server.endpoint.adapter.DefaultMethodEndpointAdapter;
import org.springframework.ws.transport.http.MessageDispatcherServlet;
import org.springframework.ws.wsdl.wsdl11.DefaultWsdl11Definition;
import org.springframework.ws.wsdl.wsdl11.Wsdl11Definition;
import org.springframework.xml.xsd.SimpleXsdSchema;

@EnableWs
@Configuration
public class WebServiceConfig extends WsConfigurerAdapter {
    @Bean
    public DefaultMethodEndpointAdapter customMethodEndpointAdapter() {
        return new DefaultMethodEndpointAdapter();
    }
    
    @Bean
    public MessageDispatcherServlet messageDispatcherServlet() {
        return new MessageDispatcherServlet();
    }
    @Bean(name = "createAdminRequest")
    public Wsdl11Definition adminWsdl11Definition() {
        DefaultWsdl11Definition wsdl11Definition = new DefaultWsdl11Definition();
        wsdl11Definition.setPortTypeName("AdminPortType");
        wsdl11Definition.setLocationUri("/soap-api");
        wsdl11Definition.setTargetNamespace("http://example.com/soap-web-service");
        wsdl11Definition.setSchema(helloSchema());
        return wsdl11Definition;
    }
    @Bean
    public SimpleXsdSchema helloSchema() {
        return new SimpleXsdSchema(new ClassPathResource("CreateAdminRequest.xsd"));
    }
}
