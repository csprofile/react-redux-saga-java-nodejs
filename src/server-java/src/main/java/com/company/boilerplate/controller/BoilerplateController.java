package com.company.boilerplate.controller;
import java.util.List;
import com.company.boilerplate.model.BoilerplateModel;
import com.company.boilerplate.service.BoilerplateService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoilerplateController {

    @RequestMapping("api/boilerplate")
    public List<BoilerplateModel> GetBoilerplate(){
        return BoilerplateService.GetBoilerplates();
    }

    @RequestMapping("api/boilerplate/{id}")
    public BoilerplateModel getTopic(@PathVariable Integer id) {
        return BoilerplateService.GetBoilerplate(id);
    }

}
