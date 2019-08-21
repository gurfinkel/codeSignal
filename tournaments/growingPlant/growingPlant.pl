#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub growingPlant {
    my ($upSpeed, $downSpeed, $desiredHeight) = @_;

    my $result = 0;
    my $c = 0;

    while ($desiredHeight > $c) {
        $c += $upSpeed;

        if ($desiredHeight <= $c) {
            return $result + 1;
        }

        $c -= $downSpeed;
        ++$result;
    }

    return $result;
}
