#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub checkFactorial {
    my ($n) = @_;

    my $c = 1;

    for (my $i = 2; $n > $c; ++$i) {
        $c *= $i;
    }

    return $n == $c;
}
