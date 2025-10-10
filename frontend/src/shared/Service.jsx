import React from 'react';
import {
  FaCloud,
  FaCubes,
  FaUserShield,
  FaClipboardList,
  FaServer,
} from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import { TbContrast2Filled } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

export default function Service() {

    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-fit bg-mainBg border-none rounded-2xl shadow-xl py-10 px-14 text-gray-300 z-50 transition-all duration-300 ease-in-out">
            <div className="px-10">
                <h3 className="text-primary uppercase p-2 text-xs font-semibold mb-4">
                    Platforms, Cloud & DevOps
                </h3>
                <div className="space-y-3 text-sm">
                    <NavLink to={"/platforms-cloud-and-devops/devops-assessment-and-cloud-strategy"} className="flex items-center gap-3 hover:text-accent">
                        <FaCloud /> DevOps Assessment & Cloud Strategy
                    </NavLink>
                    <NavLink to={"/platforms-cloud-and-devops/ci-cd-and-gitops"} className="flex items-center gap-3 hover:text-accent">
                        <FaCubes /> CI, CD and GitOps Consultation
                    </NavLink>
                    <NavLink to={"/platforms-cloud-and-devops/iac-and-configuration-management"} className="flex items-center gap-3 hover:text-accent">
                        <FaServer /> IaC and Configuration Management
                    </NavLink>
                    <NavLink to={"/platforms-cloud-and-devops/kubernetes-consultation"} className="flex items-center gap-3 hover:text-accent">
                        <AiOutlineKubernetes /> 360° Kubernetes Consultation
                    </NavLink>
                    <NavLink to={"/platforms-cloud-and-devops/devsecops-and-compliance"} className="flex items-center gap-3 hover:text-accent">
                        <FaUserShield /> DevSecOps & Compliance
                    </NavLink>
                    <NavLink to={"/platforms-cloud-and-devops/multi-cloud-strategy-and-migration"} className="flex items-center gap-3 hover:text-accent">
                        <FaClipboardList /> Multi-Cloud Strategy and Migration
                    </NavLink>
                    <NavLink to={"/platforms-cloud-and-devops/disaster-recovery-and-continuity-plan"} className="flex items-center gap-3 hover:text-accent">
                        <TbContrast2Filled /> Disaster Recovery and Continuity Plan
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
