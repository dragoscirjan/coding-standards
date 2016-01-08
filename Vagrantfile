# -*- mode: ruby -*-
# vi: set ft=ruby :
#
# Ansible DNS Bind9 Role
#
# @link      http://github.com/dragoscirjan/ansible-role-template for the canonical source repository
# @copyright Copyright (c) 2015-present Dragos Cirjan (http://dragoscirjan.github.io)
# @license   https://github.com/dragoscirjan/ansible-role-template/blob/master/LICENSE MIT
#

# Supporting LXC, Virtualbox and Libvirt (KVM/Qemu)
#
# Boxes:
# @link https://github.com/boxcutter (for Virtualbox images)
# @link https://github.com/dragosc (for LXC images)
#
# Plugins:
# @link https://github.com/fgrehm/vagrant-lxc
# @link https://github.com/pradels/vagrant-libvirt#create-box (for Libvirt images)
# @link https://github.com/sciurus/vagrant-mutate

Vagrant.configure(2) do |config|

  ##################################################################
  # Provider custom config
  ##################################################################

  # # --provider lxc
  # config.vm.provider :lxc do |lxc|
  #   # add your global lxc config here
  # end

  # # --provider virtualbox
  # config.vm.provider :virtualbox do |virtualbox|
  #   # add your global lxc config here
  # end

  # # --provider libvirt
  # config.vm.provider :libvirt do |libvirt|
  #   # add your global lxc config here
  #   libvirt.driver = "qemu"
  # end

  ##################################################################
  # Boxes config (based on provider)
  ##################################################################

  # # Debian Machine
  # config.vm.define :debian do |debian|
  #   # # --provider lxc
  #   # debian.vm.provider :lxc do |lxc, override|
  #   #   lxc.customize "network.ipv4", "10.0.3.10/24"
  #   #
  #   #   # TODO: Build box
  #   #   override.vm.box = "dragosc/debian8"
  #   # end
  #
  #   # --provider virtualbox
  #   debian.vm.provider :virtualbox do |virtualbox, override|
  #     override.vm.network "private_network", ip: "192.168.50.10"
  #
  #
  #     # override.vm.box = "debian/wheezy64" # 7
  #     override.vm.box = "debian/jessie64" # 8
  #   end
  #
  #   # # --provider libvirt
  #   # debian.vm.provider :libvirt do |libvirt, override|
  #   #   raise Vagrant::Errors::VagrantError.new, "We didn't configure our Vagrantfile for the 'libvirt' provider"
  #   # end
  # end

  # Ubuntu Machine
  config.vm.define :ubuntu do |ubuntu|
    # --provider lxc
    ubuntu.vm.provider :lxc do |lxc, override|
      lxc.customize "network.ipv4", "10.0.3.10/24"

      override.vm.box = "dragosc/trusty64"
    end

    # --provider virtualbox
    ubuntu.vm.provider :virtualbox do |virtualbox, override|
      override.vm.network "private_network", ip: "192.168.50.10"

      # override.vm.box = "ubuntu/xenial64" # 16.04 - NOT LAUNCHED
      # override.vm.box = "ubuntu/wily64" # 15.10
      # override.vm.box = "ubuntu/vivid64" # 15.04
      override.vm.box = "ubuntu/trusty64" # 14.04
    end

    # # --provider libvirt
    # ubuntu.vm.provider :libvirt do |libvirt, override|
    #   raise Vagrant::Errors::VagrantError.new, "We didn't configure our Vagrantfile for the 'libvirt' provider"
    # end
  end

  # # Centos Machine
  # config.vm.define :centos do |centos|
  #   # --provider lxc
  #   centos.vm.provider :lxc do |lxc, override|
  #     lxc.customize "network.ipv4", "10.0.3.20/24"
  #
  #     # override.vm.box = "dragosc/centos6"
  #     override.vm.box = "dragosc/centos7"
  #   end
  #
  #   # --provider virtualbox
  #   centos.vm.provider :virtualbox do |virtualbox, override|
  #     override.vm.network "private_network", ip: "192.168.50.20"
  #
  #     override.vm.box = "centos/7"
  #   end
  #
  #   # # --provider libvirt
  #   # centos.vm.provider :libvirt do |libvirt, override|
  #   #   # TODO: What network ip is using libvirt by default ?
  #   #   # override.vm.network "private_network", ip: "192.168.50.20"
  #   #
  #   #   override.vm.box = "centos/7"
  #   #   override.vm.box = "dragosc/centos-7" # TODO: This VM hasn't been verified yet
  #   # end
  # end

  # # Oracle Unbreakable Linux Machine
  # config.vm.define :oracle do |oracle|
  #   # --provider lxc
  #   oracle.vm.provider :lxc do |lxc, override|
  #     lxc.customize "network.ipv4", "10.0.3.30/24"
  #
  #     override.vm.box = "dragosc/oracle65"
  #   end
  #
  #   # --provider virtualbox
  #   oracle.vm.provider :virtualbox do |virtualbox, override|
  #     override.vm.network "private_network", ip: "192.168.50.30"
  #
  #     # override.vm.box = 'boxcutter/ol65'
  #     # override.vm.box = 'boxcutter/ol67'
  #     override.vm.box = 'boxcutter/ol71'
  #   end
  #
  #   # # --provider libvirt
  #   # oracle.vm.provider :libvirt do |libvirt, override|
  #   #   raise Vagrant::Errors::VagrantError.new, "We didn't configure our Vagrantfile for the 'libvirt' provider"
  #   # end
  # end

  ##################################################################
  # Provisioning
  ##################################################################

  # # Shell provisioning -
  # # For more info please read
  # # @link https://docs.vagrantup.com/v2/provisioning/shell.html
  # config.vm.provision "shell", inline: <<-SHELL
  #   sudo apt-get update
  #   sudo apt-get install -y apache2
  # SHELL

  # # Ansible provisioning -
  # # For more info please read
  # # @link https://docs.vagrantup.com/v2/provisioning/ansible.html
  # # @link https://docs.vagrantup.com/v2/provisioning/ansible_local.html
  # config.vm.provision :ansible do |ansible|
  #   ansible.groups = {
  #     "all_groups:children" => [
  #       # 'debian',
  #       'ubuntu',
  #       # 'centos',
  #       # 'oracle'
  #     ]
  #   }
  #   ansible.playbook = ".test-ansible.yml"
  # end

  # File provisioning -
  # For more info please read
  # @link https://docs.vagrantup.com/v2/provisioning/file.html
  config.vm.provision "shell", path: ".provision.sh"
  # config.vm.provision "shell", path: ".provision-boot.sh", run: "always"
end
