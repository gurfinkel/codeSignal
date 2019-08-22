#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub equationSolutions {
    my ($l, $r) = @_;

    my $result = 0;

    for (my $i = $l; $r >= $i; ++$i) {
        for (my $j = $l; $r >= $j; ++$j) {
            if ($i**3 == $j**2) {
                ++$result;
            }
        }
    }

    return $result;
}
