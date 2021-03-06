<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/cursus", name="cursus")
     */
    public function cursus()
    {
        return $this->render('default/cursus.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/experiences", name="experiences")
     */
    public function experiences()
    {
        return $this->render('default/experiences.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/projects", name="projects")
     */
    public function projects()
    {
        return $this->render('default/projects.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
}
