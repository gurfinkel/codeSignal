#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub alternatingSums {
    my ($a) = @_;

    my $c = 0;
    my $d = 0;

    for (my $i = 0; @$a > $i; ++$i) {
        if ($i & 1) {
            $d += $$a[$i];
        } else {
            $c += $$a[$i];
        }
    }

    return [$c, $d];
}
