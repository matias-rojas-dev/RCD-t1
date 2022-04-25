<?php

require_once __DIR__ . '/../src/router.php';
require_once __DIR__ . '/../src/functions.php';

router('GET', '^/validar-rut/(?<rut>.+)$', function ($params) {
    $rut = $params['rut'];
    $length = strlen($rut);
    $pattern = '/^(?:(?:(\d{1,2})(\d{3})(\d{3})\-?(\d|k))|(?:(\d{1,2})(\.\d{3}\.)(\d{3})\-(\d|k))|(\d{5,9}))$/';

    if (!preg_match($pattern, $rut)) {
        echo json_encode([
            'isValid' => false,
            'error' => 'El formato del RUT no es válido.',
        ]);
    } else {
        echo json_encode(['isValid' => is_valid_rut($rut)]);
    }
});

router('GET', '^/separar-nombre/(?<name>.+)$', function ($params) {
    $name = str_replace('%20', ' ', $params['name']);
    echo json_encode(split_full_name($name));
});

header("HTTP/1.0 404 Not Found");
echo '404 Not Found';
