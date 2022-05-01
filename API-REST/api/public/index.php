<?php

require_once __DIR__ . '/../src/router.php';
require_once __DIR__ . '/../src/functions.php';
require_once __DIR__ . '/../src/log.php';

$logger = logger("index.log");

router('GET', '^/validar-rut/(?<rut>.+)$', function ($params) {
    global $logger;
    $rut = $params['rut'];
    $pattern = '/^(?:(?:(\d{1,2})(\d{3})(\d{3})\-?(\d|k))|(?:(\d{1,2})(\.\d{3}\.)(\d{3})\-(\d|k))|(\d{5,9}))$/';

    $log = $logger("GET, validar-rut: \"$rut\"");
    if (!preg_match($pattern, $rut)) {
        $log("El formato del RUT no es válido.");
        echo json_encode([
            'isValid' => false,
            'error' => 'El formato del RUT no es válido.',
        ]);
    } else {
        $is_valid = is_valid_rut($rut);
        $log("El RUT es " . ($is_valid ? "válido" : "inválido") . ".");
        echo json_encode(['isValid' => $is_valid]);
    }
});

router('GET', '^/separar-nombre/(?<name>.+)$', function ($params) {
    global $logger;
    $name = str_replace('%20', ' ', $params['name']);
    $full_name = split_full_name($name);

    $has_last = array_key_exists('last', $full_name);
    $has_paternal = $has_last ? array_key_exists('paternal', $full_name['last']) : false;
    $has_maternal = $has_last ? array_key_exists('maternal', $full_name['last']) : false;

    $log = $logger("GET, separar-nombre: \"$name\"");
    $log("Resultado separación:");

    $log(($has_last ? "├─" : "└─") . " Nombres: [" . join(", ", $full_name['names']) . "]");

    if ($has_paternal) {
        $log(($has_maternal ? "├─" : "└─") . " Apellido paterno: {$full_name['last']['paternal']}");
    }

    if ($has_maternal) {
        $log("└─ Apellido materno: {$full_name['last']['maternal']}");
    }

    echo json_encode($full_name);
});

header("HTTP/1.0 404 Not Found");
echo '404 Not Found';
