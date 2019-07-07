#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub orthogonalLines {
    my ($line1, $line2) = @_;

    return $$line1[0] * $$line2[0] + @$line1[1] * @$line2[1] == 0;
}
