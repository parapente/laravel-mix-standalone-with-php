# laravel-mix-standalone-with-php
Use [laravel-mix](https://laravel-mix.com) to create a site without the [laravel](https://laravel.com) framework

## Setup
### Composer
The project doesn't include any php packages but you need to autoload mix.php to be able to use laravel-mix versioning. If you don't have composer installed on your system you can go to [the official site of composer](https://getcomposer.org) and follow the instructions found there. The next step is to run the following command on the root folder of this project:
```
composer dump-autoload
```
### Node
You need to have npm installed on your system to use laravel-mix. Go to [the official nodejs web page](https://nodejs.org/) for installation instructions. When you are ready to continue run the command below to install the necessary npm packages:
```
npm ci
```

## Usage
After the installation process you can use laravel-mix by running one of the following scripts:
```
npm run dev
```
Prepare the project for development.

```
npm run watch
```
Prepare the project for development and run a standalone php server and [browsersync](https://browsersync.io). You need to have php installed on your system.

```
npm run prod
```
Prepare the project to be used in production.
