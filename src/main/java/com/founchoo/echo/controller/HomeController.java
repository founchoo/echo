package com.founchoo.echo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Array;
import java.util.ArrayList;


@Controller
public class HomeController {

    @GetMapping("/")
    public ModelAndView getIndexPage(HttpServletRequest request) {
        var mv = new ModelAndView("index");

        ArrayList<String> initialsPorn = new ArrayList<>();
        initialsPorn.add("b");
        initialsPorn.add("p");
        initialsPorn.add("m");
        initialsPorn.add("f");
        initialsPorn.add("d");
        initialsPorn.add("t");
        initialsPorn.add("n");
        initialsPorn.add("l");
        initialsPorn.add("g");
        initialsPorn.add("k");
        initialsPorn.add("h");
        initialsPorn.add("j");
        initialsPorn.add("q");
        initialsPorn.add("x");
        initialsPorn.add("zh");
        initialsPorn.add("ch");
        initialsPorn.add("sh");
        initialsPorn.add("r");
        initialsPorn.add("z");
        initialsPorn.add("c");
        initialsPorn.add("s");
        initialsPorn.add("y");
        initialsPorn.add("w");
        mv.addObject("initialsPron", initialsPorn);

        ArrayList<String> vowelsPorn = new ArrayList<>();
        vowelsPorn.add("a");
        vowelsPorn.add("o");
        vowelsPorn.add("e");
        vowelsPorn.add("i");
        vowelsPorn.add("u");
        vowelsPorn.add("v");
        vowelsPorn.add("ai");
        vowelsPorn.add("ei");
        vowelsPorn.add("ui");
        vowelsPorn.add("ao");
        vowelsPorn.add("ou");
        vowelsPorn.add("iu");
        vowelsPorn.add("ie");
        vowelsPorn.add("ve");
        vowelsPorn.add("er");
        vowelsPorn.add("an");
        vowelsPorn.add("en");
        vowelsPorn.add("in");
        vowelsPorn.add("un");
        vowelsPorn.add("vn");
        vowelsPorn.add("ang");
        vowelsPorn.add("eng");
        vowelsPorn.add("ing");
        vowelsPorn.add("ong");
        mv.addObject("vowelsPron", vowelsPorn);

        ArrayList<String> altogetherPorn = new ArrayList<>();
        altogetherPorn.add("zhi");
        altogetherPorn.add("chi");
        altogetherPorn.add("shi");
        altogetherPorn.add("ri");
        altogetherPorn.add("zi");
        altogetherPorn.add("ci");
        altogetherPorn.add("si");
        altogetherPorn.add("yi");
        altogetherPorn.add("wu");
        altogetherPorn.add("yu");
        altogetherPorn.add("ye");
        altogetherPorn.add("yue");
        altogetherPorn.add("yuan");
        altogetherPorn.add("yin");
        altogetherPorn.add("yun");
        altogetherPorn.add("ying");
        mv.addObject("altogetherPron", altogetherPorn);

        return mv;
    }

    @GetMapping("/about")
    public ModelAndView getAboutPage(HttpServletRequest request) {
        return new ModelAndView("about");
    }
}
