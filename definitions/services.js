exports.nznpm = {
  type: 'docker',
  specific: {
    repositoryUrl: 'git@github.com:rjrodger/nodezoo-npm.git',
    buildScript: 'build.sh',
    execute: {
      args: '-e BEANSTALK_IP=192.168.59.103 -e REDIS_IP=192.168.59.103 -e ES_IP=192.168.59.103 -d',
      exec: '/usr/bin/node srvs/npm-prod.js --seneca.log=plugin:npm'
    }
  }
};

exports.nzgithub = {
  type: 'docker',
  specific: {
    repositoryUrl: 'git@github.com:rjrodger/nodezoo-github.git',
    buildScript: 'build.sh',
    execute: {
      args: '-e BEANSTALK_IP=192.168.59.103 -e REDIS_IP=192.168.59.103 -e ES_IP=192.168.59.103 -d',
      exec: '/usr/bin/node srvs/github-prod.js --seneca.options.github.token=a7626b8dbcd5627671639484460b11900818a64e --seneca.log.all'
    }
  }
};

exports.nzindex = {
  type: 'docker',
  specific: {
    repositoryUrl: 'git@github.com:rjrodger/nodezoo-index.git',
    buildScript: 'build.sh',
    execute: {
      args: '-e BEANSTALK_IP=192.168.59.103 -e REDIS_IP=192.168.59.103 -e ES_IP=192.168.59.103 -d',
      exec: '/usr/bin/node /srvs/index-prod.js'
    }
  }
};

exports.nzinfo = {
  type: 'docker',
  specific: {
    repositoryUrl: 'git@github.com:rjrodger/nodezoo-info.git',
    buildScript: 'build.sh',
    execute: {
      args: '-e BEANSTALK_IP=192.168.59.103 -e REDIS_IP=192.168.59.103 -e ES_IP=192.168.59.103 -d',
      exec: '/usr/bin/node /srvs/info-prod.js'
    }
  }
};

exports.nzweb = {
  type: 'docker',
  specific: {
    repositoryUrl: 'git@github.com:rjrodger/nodezoo-web.git',
    buildScript: 'build.sh',
    execute: {
      args: '-p 8000:8000 -e BEANSTALK_IP=192.168.59.103 -e REDIS_IP=192.168.59.103 -e ES_IP=192.168.59.103 -d',
      exec: '/bin/bash run.sh'
    }
  }
};

